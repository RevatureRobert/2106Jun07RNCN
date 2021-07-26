select "ArtistId", "Name" from "Artist" a where a."Name" = 'AC/DC';

-- SQL -> Structured Query Language
-- Sublanguages
-- DML -> Data Manipulation Language
--		CRUD operations: select, insert, update, delete

-- DDL -> data definition lanuage
--		create, alter, drop, truncate

-- creates a table
create table colors(
	name char(10)
);

-- alters a table
alter table colors add column id integer;

-- deletes the data inside a table
truncate table colors;
-- deletes the table itself
drop table colors;

-- DCL -> data control language
--		grant, revoke

-- DQL -> data query language
--		select

-- TCL -> transaction control language
--		begin, end, commit, rollback, savepoint



-- some basic querying
select * from "Invoice";
select "BillingCountry", "Total" from "Invoice";
-- filter the rows for specific queries
select "BillingCountry", "Total" from "Invoice" where "Total" > 10;
select "BillingCountry", "Total" from "Invoice" order by "BillingCountry" asc;
select * from "Invoice";
select "Total" from "Invoice" where "BillingCountry" = 'USA';


-- an example of subqueries
select "Total" from "Invoice" where "InvoiceId" in (
	select "InvoiceId" from "Invoice" where "BillingCountry" = 'USA');
	
select * from "Invoice";

insert into "Invoice" ("InvoiceId", "BillingCountry", "Total") values (13, 'USA', 10.00);

-- constraints
-- unique, not null, primary key, foreign key, default, check

-- unique 		-> all rows must have a unique value for that column
-- not null 	-> all rows must have a value other than null for that column
-- primary key 	-> combination of unique and not null
-- foreign key 	-> referential integrity
-- default 		-> provides a default value if non are given
-- check 		-> will check the value as it is being inserted or updated

create table topics (
	id integer primary key,
	topic_name text unique not null,		-- char will allocate space for the string, it will not dynamically resize itself
										-- varchar will do the same, but will dynamically shrink so you do not use more space than needed
										-- text will grow and shrink with the data it is provided
	cool boolean default(true) not null,
	category text not null
);

alter table topics drop constraint topics_topic_name_key;
alter table topics add constraint topic_name_unique unique(topic_name);


alter table topics add column label integer;
alter table colors add constraint pk_colors_id primary key(id);
alter table topics add constraint fk_topic_label_color foreign key(label) references colors(id);

-- This is valid sql syntax, this is supported by all sql engines.
--insert into colors (id, name) values (1, 'blue');
--insert into colors (id, name) values (2, 'grey');
insert into topics values (1, 'name',true,'awesome',1);
select * from colors;
select * from topics;

-- an example of how postgres extends the sql standard. This syntax is not supported by all sql engines.
insert into colors (id, name) values (1, 'blue'), (2, 'grey');


