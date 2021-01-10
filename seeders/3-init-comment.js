'use strict';

const comment = require('../models/comment');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   
    /*let path = require('path');
    let fs = require('fs');
    let comments = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../public/json/comment.json')));*/
    let rad = require('../APIs/random');
    let commentArr = [];
    let tf = [true, false];
    let lorem = [
      "A ex provident cupiditate id aut deserunt explicabo autem dolorum, fuga, quidem laudantium similique veritatis? Repudiandae minima esse veniam nemo eius ex eos magnam, placeat atque corporis adipisci iure aliquid, totam nesciunt accusantium a perspiciatis omnis reprehenderit deleniti fugit suscipit alias natus?",
      "LAtque rem velit, laborum sapiente corrupti incidunt itaque quibusdam nisi ab eaque libero vel tempore, enim neque eum porro magni. Tenetur quaerat, error, placeat magnam aspernatur suscipit obcaecati consequuntur aut eaque accusamus exercitationem aliquid! Est, perspiciatis, quos eveniet earum sunt aliquid voluptatem consectetur ratione, a quam quo quaerat praesentium magnam corporis temporibus error officia consequuntur quae fugiat expedita minus libero maxime? Eius reprehenderit pariatur ipsa nisi laborum quas consequatur itaque fugit consequuntur!",
      "Dolore distinctio iste unde iure natus aspernatur assumenda sapiente, architecto eveniet! Similique excepturi maxime, beatae, recusandae in quisquam numquam temporibus et quia ipsam aperiam sunt iure magni laboriosam ratione quo accusamus tempora. Repellendus delectus odio error distinctio neque incidunt atque, reprehenderit repellat laborum facilis explicabo et inventore in, laboriosam doloremque beatae, ab at praesentium esse minus. Voluptatem voluptatum, itaque et, eius voluptates accusantium laudantium incidunt, rem laboriosam enim reiciendis earum. Laudantium veritatis qui eligendi, cum at nisi consequuntur eaque, officia quas voluptas quia magni, rerum provident autem molestiae totam. Voluptatum quidem quae, inventore architecto, repudiandae debitis fuga exercitationem pariatur aspernatur eos perferendis quasi commodi molestiae porro maxime saepe aut temporibus natus ex corrupti enim in. Voluptate eos quae repellat earum ducimus asperiores ipsam, facilis itaque doloribus sed hic assumenda cum quam enim nihil doloremque veniam. Facere sint tempore cupiditate, perferendis laudantium iste ab aut ipsa inventore natus doloribus velit eius totam ullam quo, ut sit corrupti dolores aliquid? Tempora hic quaerat eaque iure reprehenderit laudantium ab aperiam tenetur velit fugiat, provident asperiores facere nemo maxime libero! Minus architecto excepturi, quibusdam et non illo optio culpa fugiat blanditiis dolor commodi, exercitationem ducimus eaque!"
    ]
    for (let i = 0; i < 100; i++) {
      let comment = {};
      comment.productId = rad.randInt(1, 21);
      comment.userId = rad.randInt(1, 3);
      comment.isLiked = tf[rad.randInt(0, 1)];
      comment.content  = lorem[rad.randInt(0, 2)];
      comment.createdAt = Sequelize.literal('NOW()');
      comment.updatedAt = Sequelize.literal('NOW()');
      commentArr.push(comment);
    }

    await queryInterface.bulkInsert('Comments', commentArr);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
