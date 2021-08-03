
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
