create table tb_client (id int8 generated by default as identity, age int4, email varchar(255), height float8, name varchar(255), objective int4, password varchar(255), weight float8, primary key (id));
create table tb_schedulings (id int8 generated by default as identity, date timestamp, client_id int8, trainer_id int8, primary key (id));
create table tb_trainers (id int8 generated by default as identity, cref varchar(255), email varchar(255), name varchar(255), password varchar(255), primary key (id));
alter table if exists tb_schedulings add constraint FKn5hdb2p9k19ja8q4utgh2uk5x foreign key (client_id) references tb_client;
alter table if exists tb_schedulings add constraint FK4o5p8ms37s1vqfh57754dy4h2 foreign key (trainer_id) references tb_trainers;
