# ParcialProgramacion
Se ingresaron estas tablas en este orden, para despues poder hacer las relaciones sin tener problemas con las claves foraneas.
sequelize model:generate --name Brand --attributes name:string
sequelize model:generate --name Category --attributes name:string
sequelize model:generate --name Size --attributes tamaño:string
sequelize model:generate --name Gender --attributes type:string
sequelize model:generate --name Payment --attributes type:string
sequelize model:generate --name Address --attributes street:string,number:integer
sequelize model:generate --name State --attributes description:string
sequelize model:generate --name User --attributes fist_name:string,last_name:string,username:string,email:string,password:string,addresses_id:integer
sequelize model:generate --name Product --attributes name:string,price:decimal,stock:integer,stock_min:integer,stock_max:integer,brands_id:integer,categories_id:integer,sizes_id:integer,genders_id:integer
sequelize model:generate --name Image --attributes name:string,products_id:integer
sequelize model:generate --name Order --attributes number:integer,date:date,total:decimal,payments_id:integer,users_id:integer,users_addresses_id:integer,states_id:integer
sequelize model:generate --name Shipping --attributes street:string,number:integer,orders_id:integer
sequelize model:generate --name OrderDetail --attributes quantity:decimal,subtotal:decimal,products_id:integer,orders_id:integer
