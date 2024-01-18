create database dpAPIcars;

use dpAPIcars;

create table cars (
codigo int primary key auto_increment,
modelo varchar(30),
placa varchar(7)
);

insert into cars ( modelo, placa) values ('Toyota Corolla', 'EMO4929');
insert into cars ( modelo, placa) values ('VOLVO xc60', 'BHO1590');

select * from cars