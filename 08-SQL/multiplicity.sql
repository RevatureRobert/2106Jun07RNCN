
-- different types of multiplicity in sql
--		1-1, 1-m, m-1, m-m
--			m-1 or 1-m, foreign key goes inside the many table
--			1-1, foreign key goes in either table, but must be unique
--			m-m, needs a junction table (table with a composite key where both primary keys are foreign keys to other tables.



-- Often in multiplicity, since the relationship is meant to represent aggregation, we want to replace the numerical
--		representation of the other table with the information itself.
--	We are able to accomplish this with joins.


insert into topics values (2, 'name2', true, 'justified', 1), (3, 'name3',false,'awesome', 2), (4, 'name4', false, 'justified', null);
insert into colors values ('purple',3);

-- different kinds of joins: inner join
select topic_name, cool, category, name as label from topics t inner join colors c on topics.label = colors.id;

select topic_name, cool, category, name as label from topics t inner join colors c using (id);

-- left outer join

select topic_name, cool, category, name as label from topics left join colors on topics.label = colors.id;

-- right outer join

select topic_name, cool, category, name as label from topics right join colors on topics.label = colors.id;

-- full outer join

select topic_name, cool, category, name as label from topics full outer join colors on topics.label = colors.id;

-- cross join

select topic_name, cool, category, name as label from topics cross join colors where cool = true;


select topic_name, cool, category, name as label from topics t inner join colors c on t.label = c.id;

select topic_name, cool, category, name as label from topics t join colors c on t.label = c.id;

select topic_name, cool, category, name as label from topics t, colors c where t.label = c.id;



-- set operators
--		rules for set operators: must be the same number of columns and the same datatypes

create table a (
	id integer,
	color text,
	this_date date
);

create table b (
	id integer,
	color_b text
);

insert into a values (1, 'red','2012-10-17'),(2,'blue','2015-03-04');
insert into b values (1, 'purple'),(2,'green');
insert into b values (3, 'blue');

-- union all
select color from a union all select color_b from b;

-- union distinct
select color from a union distinct select color_b from b;

select color from a union select color_b from b;


-- minus
select color from a except select color_b from b;
select color_b from b except select color from a;

-- intersect
select color from a intersect select color_b from b;

-- joins will join tables side by side, set operators will return two queries on top of one another



-- views will create a virtual table that will keep track of the underlying tables and update itself accordingly
--		it will provide a more efficient means to running joins, since the table is already constructed and 
--		the information is already accumulated.
create view topic_colors as select topic_name, cool, category, name as label from topics t join colors c on t.label = c.id;

select * from topic_colors;
-- does the view update with the tables?
update topics set topic_name = 'updated name3' where topic_name = 'name3';

select * from topic_colors;




-- this does not work due to the implicit constraint on foreign keys "referential integrity"
delete from colors where name = 'grey';
drop table topics;
