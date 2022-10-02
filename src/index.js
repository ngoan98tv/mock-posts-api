const faker = require("@faker-js/faker").faker;

const mockLength = parseInt(process.env.MOCK_LENGTH ?? "100");

module.exports = () => {
  const data = { posts: [] };

  for (let i = 0; i < mockLength; i++) {
    data.posts.push({
      id: i + 1,
      title: faker.commerce.productName(),
      desc: faker.commerce.productDescription(),
      thumbnail: faker.image.city(300, 300, true),
      createdAt: faker.date.past(),
    });
  }

  return data;
};
