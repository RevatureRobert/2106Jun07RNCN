

-- ACID -> properties of a transaction
--		atomic consistent isolated durable
-- what is a transaction?
--		a group of manipulation commands grouped together an a singular interaction with the db

begin;
select * from blah;
insert into colors values ('sadifjhg', 4),('a;klsjhgf', 5);
select * from colors;
rollback;

commit;

-- every transaction starts with begin;
begin;
-- only commands within DML sublanguage will work with transactions
	insert into colors values ('sakljgfh', nextval('init_seq'));
savepoint first;
	insert into topics (topic_name, cool, category) values ('kljnkundsrfgear',true,'askujigheiur');
savepoint second;
	insert into colors values ('skjhhbg', nextval('init_seq'));
select * from colors;
rollback to first;
commit;
select * from topics;

-- isolation deals with how concurrent transactions behave. Documentation: https://www.postgresql.org/docs/13/mvcc.html
