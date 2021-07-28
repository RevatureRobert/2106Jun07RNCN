
-- sequences
drop sequence init_seq; 
create sequence init_seq start 2 increment by 5;
select nextval('init_seq');


insert into topics values (nextval('init_seq'), 'asklsargdsargdfghejigh',true,'asklijhjgf');
select * from topics;


---   basic function
create or replace function basic(name text, dm_to text) returns text as $basic$
begin
	return $1|| dm_to;
end;
$basic$ language plpgsql;

select basic ('henry','sally');


-- auto incrementing a primary key. 
--		use a sequence to generate the number 
--		a function to alter the new record
--		and a trigger to execute that value
create or replace function pk_trigger_fn () returns trigger as $pk_trigger_fn$
begin
	if(tg_op = 'INSERT') then
		NEW.id := nextval('init_seq');
	end if;
	return NEW;
end;
$pk_trigger_fn$ language plpgsql;

create trigger topics_trigger
	before insert on topics
	for each row execute function pk_trigger_fn();
	
insert into topics(topic_name, cool, category) values ('shsdargould have incrememented',true,'sql');
select * from topics;
insert into topics values (1, 'increment again', false, 'sql',2);


alter table topics add column incremented serial;
