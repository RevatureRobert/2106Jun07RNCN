select "ArtistId", "Name" from "Artist" a where a."Name" = 'AC/DC';

-- SQL -> Structured Query Language

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

-- This is valid sql syntax, this is supported by all sql engines.
--insert into colors (id, name) values (1, 'blue');
--insert into colors (id, name) values (2, 'grey');
insert into topics values (1, 'name',true,'awesome',1);
select * from colors;
select * from topics;

-- an example of how postgres extends the sql standard. This syntax is not supported by all sql engines.
insert into colors (id, name) values (1, 'blue'), (2, 'grey');


-- for indexes, we have different types on indexes. reference postgres documentation: https://www.postgresql.org/docs/13/indexes.html

create index random_index on topics(topic_name);



insert into topics values (1, 'askljigh',true,'asklijhjgf');

