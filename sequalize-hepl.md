npx sequelize-cli db:migrate

<!-- untuk all -->

npx sequelize-cli db:seed:all

npx sequelize-cli db:seed --seed 20240717235314-author.js
npx sequelize-cli db:seed --seed 20240717235251-book.js

<!-- klw ada masalah: -->

npx sequelize-cli db:seed:undo:all
npx sequelize-cli db:migrate:undo:all
