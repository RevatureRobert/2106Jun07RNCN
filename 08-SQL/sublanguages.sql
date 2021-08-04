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
