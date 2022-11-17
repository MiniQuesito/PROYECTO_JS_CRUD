create database voto1;

use voto1; 


create table aprendiz (
    id int(11) primary key not null,
    username varchar(50) not null,
    contraseña varchar(50)not null,
    ficha_id int(11),
    constraint fk_ficha FOREIGN KEY (ficha_id) REFERENCIAS ficha(id)
);

describe aprendiz; 


--ficha table
create table ficha(
    id int(11) primary key not null,
    numero_ficha varchar(50) not null
);

