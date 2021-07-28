--
-- PostgreSQL database dump
--

-- SET client_encoding = 'UTF-8';
-- SET check_function_bodies = false;
-- SET client_min_messages = warning;

--
-- Name: sportsdb_sample; Type: DATABASE; Schema: -; Owner: postgres81
--

-- CREATE DATABASE sportsdb_sample WITH TEMPLATE = template0 ENCODING = 'SQL_ASCII';
-- \connect sportsdb_sample
-- SET client_encoding = 'UTF-8';
-- SET check_function_bodies = false;
-- SET client_min_messages = warning;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres81
--


-- COMMENT ON SCHEMA public IS 'Standard public schema';


-- SET search_path = public, pg_catalog;

--
-- Name: primary_id; Type: DOMAIN; Schema: public; Owner: postgres81
--

CREATE DOMAIN primary_id AS integer;


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: addresses; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE addresses (
    id serial NOT NULL,
    location_id integer NOT NULL,
    "language" character varying(100),
    suite character varying(100),
    floor character varying(100),
    building character varying(100),
    street_number character varying(100),
    street_prefix character varying(100),
    street character varying(100),
    street_suffix character varying(100),
    neighborhood character varying(100),
    district character varying(100),
    locality character varying(100),
    county character varying(100),
    region character varying(100),
    postal_code character varying(100),
    country character varying(100)
);


--
-- Name: addresses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('addresses', 'id'), 1, false);


--
-- Name: affiliation_phases; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE affiliation_phases (
    id serial NOT NULL,
    affiliation_id integer NOT NULL,
    ancestor_affiliation_id integer,
    start_season_id integer,
    start_date_time timestamp without time zone,
    end_season_id integer,
    end_date_time timestamp without time zone
);


--
-- Name: affiliation_phases_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('affiliation_phases', 'id'), 75, true);


--
-- Name: affiliations; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE affiliations (
    id serial NOT NULL,
    affiliation_key character varying(100) NOT NULL,
    affiliation_type character varying(100),
    publisher_id integer NOT NULL
);


--
-- Name: affiliations_documents; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE affiliations_documents (
    affiliation_id integer NOT NULL,
    document_id integer NOT NULL
);


--
-- Name: affiliations_events; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE affiliations_events (
    affiliation_id integer NOT NULL,
    event_id integer NOT NULL
);


--
-- Name: affiliations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('affiliations', 'id'), 29, true);


--
-- Name: affiliations_media; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE affiliations_media (
    affiliation_id integer NOT NULL,
    media_id integer NOT NULL
);


--
-- Name: american_football_action_participants; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE american_football_action_participants (
    id serial NOT NULL,
    american_football_action_play_id integer NOT NULL,
    person_id integer NOT NULL,
    participant_role character varying(100) NOT NULL,
    score_type character varying(100),
    field_line integer,
    yardage integer,
    score_credit integer,
    yards_gained integer
);


--
-- Name: american_football_action_participants_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('american_football_action_participants', 'id'), 293, true);


--
-- Name: american_football_action_plays; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE american_football_action_plays (
    id serial NOT NULL,
    american_football_event_state_id integer NOT NULL,
    play_type character varying(100),
    score_attempt_type character varying(100),
    drive_result character varying(100),
    points integer,
    "comment" character varying(255)
);


--
-- Name: american_football_action_plays_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('american_football_action_plays', 'id'), 179, true);


--
-- Name: american_football_defensive_stats; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE american_football_defensive_stats (
    id serial NOT NULL,
    tackles_total character varying(100),
    tackles_solo character varying(100),
    tackles_assists character varying(100),
    interceptions_total character varying(100),
    interceptions_yards character varying(100),
    interceptions_average character varying(100),
    interceptions_longest character varying(100),
    interceptions_touchdown character varying(100),
    quarterback_hurries character varying(100),
    sacks_total character varying(100),
    sacks_yards character varying(100),
    passes_defensed character varying(100)
);


--
-- Name: american_football_defensive_stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('american_football_defensive_stats', 'id'), 751, true);


--
-- Name: american_football_down_progress_stats; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE american_football_down_progress_stats (
    id serial NOT NULL,
    first_downs_total character varying(100),
    first_downs_pass character varying(100),
    first_downs_run character varying(100),
    first_downs_penalty character varying(100),
    conversions_third_down character varying(100),
    conversions_third_down_attempts character varying(100),
    conversions_third_down_percentage character varying(100),
    conversions_fourth_down character varying(100),
    conversions_fourth_down_attempts character varying(100),
    conversions_fourth_down_percentage character varying(100)
);


--
-- Name: american_football_down_progress_stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('american_football_down_progress_stats', 'id'), 36, true);


--
-- Name: american_football_event_states; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE american_football_event_states (
    id serial NOT NULL,
    event_id integer NOT NULL,
    current_state smallint,
    sequence_number integer,
    period_value integer,
    period_time_elapsed character varying(100),
    period_time_remaining character varying(100),
    clock_state character varying(100),
    down integer,
    team_in_possession_id integer,
    distance_for_1st_down integer,
    field_side character varying(100),
    field_line integer,
    context character varying(40)
);


--
-- Name: american_football_event_states_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('american_football_event_states', 'id'), 249, true);


--
-- Name: american_football_fumbles_stats; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE american_football_fumbles_stats (
    id serial NOT NULL,
    fumbles_committed character varying(100),
    fumbles_forced character varying(100),
    fumbles_recovered character varying(100),
    fumbles_lost character varying(100),
    fumbles_yards_gained character varying(100),
    fumbles_own_committed character varying(100),
    fumbles_own_recovered character varying(100),
    fumbles_own_lost character varying(100),
    fumbles_own_yards_gained character varying(100),
    fumbles_opposing_committed character varying(100),
    fumbles_opposing_recovered character varying(100),
    fumbles_opposing_lost character varying(100),
    fumbles_opposing_yards_gained character varying(100)
);


--
-- Name: american_football_fumbles_stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('american_football_fumbles_stats', 'id'), 121, true);


--
-- Name: american_football_offensive_stats; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE american_football_offensive_stats (
    id serial NOT NULL,
    offensive_plays_yards character varying(100),
    offensive_plays_number character varying(100),
    offensive_plays_average_yards_per character varying(100),
    possession_duration character varying(100),
    turnovers_giveaway character varying(100)
);


--
-- Name: american_football_offensive_stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('american_football_offensive_stats', 'id'), 36, true);


--
-- Name: american_football_passing_stats; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE american_football_passing_stats (
    id serial NOT NULL,
    passes_attempts character varying(100),
    passes_completions character varying(100),
    passes_percentage character varying(100),
    passes_yards_gross character varying(100),
    passes_yards_net character varying(100),
    passes_yards_lost character varying(100),
    passes_touchdowns character varying(100),
    passes_touchdowns_percentage character varying(100),
    passes_interceptions character varying(100),
    passes_interceptions_percentage character varying(100),
    passes_longest character varying(100),
    passes_average_yards_per character varying(100),
    passer_rating character varying(100),
    receptions_total character varying(100),
    receptions_yards character varying(100),
    receptions_touchdowns character varying(100),
    receptions_first_down character varying(100),
    receptions_longest character varying(100),
    receptions_average_yards_per character varying(100)
);


--
-- Name: american_football_passing_stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('american_football_passing_stats', 'id'), 301, true);


--
-- Name: american_football_penalties_stats; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE american_football_penalties_stats (
    id serial NOT NULL,
    penalties_total character varying(100),
    penalty_yards character varying(100),
    penalty_first_downs character varying(100)
);


--
-- Name: american_football_penalties_stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('american_football_penalties_stats', 'id'), 36, true);


--
-- Name: american_football_rushing_stats; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE american_football_rushing_stats (
    id serial NOT NULL,
    rushes_attempts character varying(100),
    rushes_yards character varying(100),
    rushes_touchdowns character varying(100),
    rushing_average_yards_per character varying(100),
    rushes_first_down character varying(100),
    rushes_longest character varying(100)
);


--
-- Name: american_football_rushing_stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('american_football_rushing_stats', 'id'), 175, true);


--
-- Name: american_football_sacks_against_stats; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE american_football_sacks_against_stats (
    id serial NOT NULL,
    sacks_against_yards character varying(100),
    sacks_against_total character varying(100)
);


--
-- Name: american_football_sacks_against_stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('american_football_sacks_against_stats', 'id'), 77, true);


--
-- Name: american_football_scoring_stats; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE american_football_scoring_stats (
    id serial NOT NULL,
    touchdowns_total character varying(100),
    touchdowns_passing character varying(100),
    touchdowns_rushing character varying(100),
    touchdowns_special_teams character varying(100),
    touchdowns_defensive character varying(100),
    extra_points_attempts character varying(100),
    extra_points_made character varying(100),
    extra_points_missed character varying(100),
    extra_points_blocked character varying(100),
    field_goal_attempts character varying(100),
    field_goals_made character varying(100),
    field_goals_missed character varying(100),
    field_goals_blocked character varying(100),
    safeties_against character varying(100),
    two_point_conversions_attempts character varying(100),
    two_point_conversions_made character varying(100),
    touchbacks_total character varying(100)
);


--
-- Name: american_football_scoring_stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('american_football_scoring_stats', 'id'), 842, true);


--
-- Name: american_football_special_teams_stats; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE american_football_special_teams_stats (
    id serial NOT NULL,
    returns_punt_total character varying(100),
    returns_punt_yards character varying(100),
    returns_punt_average character varying(100),
    returns_punt_longest character varying(100),
    returns_punt_touchdown character varying(100),
    returns_kickoff_total character varying(100),
    returns_kickoff_yards character varying(100),
    returns_kickoff_average character varying(100),
    returns_kickoff_longest character varying(100),
    returns_kickoff_touchdown character varying(100),
    returns_total character varying(100),
    returns_yards character varying(100),
    punts_total character varying(100),
    punts_yards_gross character varying(100),
    punts_yards_net character varying(100),
    punts_longest character varying(100),
    punts_inside_20 character varying(100),
    punts_inside_20_percentage character varying(100),
    punts_average character varying(100),
    punts_blocked character varying(100),
    touchbacks_total character varying(100),
    touchbacks_total_percentage character varying(100),
    touchbacks_kickoffs character varying(100),
    touchbacks_kickoffs_percentage character varying(100),
    touchbacks_punts character varying(100),
    touchbacks_punts_percentage character varying(100),
    touchbacks_interceptions character varying(100),
    touchbacks_interceptions_percentage character varying(100),
    fair_catches character varying(100)
);


--
-- Name: american_football_special_teams_stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('american_football_special_teams_stats', 'id'), 142, true);


--
-- Name: baseball_action_contact_details; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE baseball_action_contact_details (
    id serial NOT NULL,
    baseball_action_pitch_id integer NOT NULL,
    "location" character varying(100),
    strength character varying(100),
    velocity integer,
    "comment" text,
    trajectory_coordinates character varying(100),
    trajectory_formula character varying(100)
);


--
-- Name: baseball_action_contact_details_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('baseball_action_contact_details', 'id'), 1, false);


--
-- Name: baseball_action_pitches; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE baseball_action_pitches (
    id serial NOT NULL,
    baseball_action_play_id integer NOT NULL,
    sequence_number integer,
    baseball_defensive_group_id integer,
    umpire_call character varying(100),
    pitch_location character varying(100),
    pitch_type character varying(100),
    pitch_velocity integer,
    "comment" text,
    trajectory_coordinates character varying(100),
    trajectory_formula character varying(100),
    ball_type character varying(40),
    strike_type character varying(40)
);


--
-- Name: baseball_action_pitches_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('baseball_action_pitches', 'id'), 1, false);


--
-- Name: baseball_action_plays; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE baseball_action_plays (
    id serial NOT NULL,
    baseball_event_state_id integer NOT NULL,
    play_type character varying(100),
    notation character varying(100),
    notation_yaml text,
    baseball_defensive_group_id integer,
    "comment" character varying(255),
    runner_on_first_advance integer,
    runner_on_second_advance integer,
    runner_on_third_advance integer,
    outs_recorded integer,
    rbi integer,
    runs_scored integer,
    earned_runs_scored character varying(100)
);


--
-- Name: baseball_action_plays_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('baseball_action_plays', 'id'), 17, true);


--
-- Name: baseball_action_substitutions; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE baseball_action_substitutions (
    id serial NOT NULL,
    baseball_event_state_id integer NOT NULL,
    sequence_number integer,
    person_type character varying(100),
    person_original_id integer,
    person_original_position_id integer,
    person_original_lineup_slot integer,
    person_replacing_id integer,
    person_replacing_position_id integer,
    person_replacing_lineup_slot integer,
    substitution_reason character varying(100),
    "comment" character varying(100)
);


--
-- Name: baseball_action_substitutions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('baseball_action_substitutions', 'id'), 1, false);


--
-- Name: baseball_defensive_group; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE baseball_defensive_group (
    id serial NOT NULL
);


--
-- Name: baseball_defensive_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('baseball_defensive_group', 'id'), 1, false);


--
-- Name: baseball_defensive_players; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE baseball_defensive_players (
    id serial NOT NULL,
    baseball_defensive_group_id integer NOT NULL,
    player_id integer NOT NULL,
    position_id integer NOT NULL
);


--
-- Name: baseball_defensive_players_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('baseball_defensive_players', 'id'), 1, false);


--
-- Name: baseball_defensive_stats; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE baseball_defensive_stats (
    id serial NOT NULL,
    double_plays integer,
    triple_plays integer,
    putouts integer,
    assists integer,
    errors integer,
    fielding_percentage numeric,
    defensive_average numeric,
    errors_passed_ball integer,
    errors_catchers_interference integer
);


--
-- Name: baseball_defensive_stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('baseball_defensive_stats', 'id'), 1724, true);


--
-- Name: baseball_event_states; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE baseball_event_states (
    id serial NOT NULL,
    event_id integer NOT NULL,
    current_state smallint,
    sequence_number integer,
    at_bat_number integer,
    inning_value integer,
    inning_half character varying(100),
    outs integer,
    balls integer,
    strikes integer,
    runner_on_first_id integer,
    runner_on_second_id integer,
    runner_on_third_id integer,
    runner_on_first smallint,
    runner_on_second smallint,
    runner_on_third smallint,
    runs_this_inning_half integer,
    pitcher_id integer,
    batter_id integer,
    batter_side character varying(100),
    context character varying(40)
);


--
-- Name: baseball_event_states_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('baseball_event_states', 'id'), 17, true);


--
-- Name: baseball_offensive_stats; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE baseball_offensive_stats (
    id serial NOT NULL,
    average numeric,
    runs_scored integer,
    at_bats integer,
    hits integer,
    rbi integer,
    total_bases integer,
    slugging_percentage numeric,
    bases_on_balls integer,
    strikeouts integer,
    left_on_base integer,
    left_in_scoring_position integer,
    singles integer,
    doubles integer,
    triples integer,
    home_runs integer,
    grand_slams integer,
    at_bats_per_rbi numeric,
    plate_appearances_per_rbi numeric,
    at_bats_per_home_run numeric,
    plate_appearances_per_home_run numeric,
    sac_flies integer,
    sac_bunts integer,
    grounded_into_double_play integer,
    moved_up integer,
    on_base_percentage numeric,
    stolen_bases integer,
    stolen_bases_caught integer,
    stolen_bases_average numeric,
    hit_by_pitch integer,
    defensive_interferance_reaches integer,
    on_base_plus_slugging numeric,
    plate_appearances integer,
    hits_extra_base integer
);


--
-- Name: baseball_offensive_stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('baseball_offensive_stats', 'id'), 1724, true);


--
-- Name: baseball_pitching_stats; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE baseball_pitching_stats (
    id serial NOT NULL,
    runs_allowed integer,
    singles_allowed integer,
    doubles_allowed integer,
    triples_allowed integer,
    home_runs_allowed integer,
    innings_pitched character varying(20),
    hits integer,
    earned_runs integer,
    unearned_runs integer,
    bases_on_balls integer,
    bases_on_balls_intentional integer,
    strikeouts integer,
    strikeout_to_bb_ratio numeric,
    number_of_pitches integer,
    era numeric,
    inherited_runners_scored integer,
    pick_offs integer,
    errors_hit_with_pitch integer,
    errors_wild_pitch integer,
    balks integer,
    wins integer,
    losses integer,
    saves integer,
    shutouts integer,
    games_complete integer,
    games_finished integer,
    winning_percentage numeric,
    event_credit character varying(40),
    save_credit character varying(40)
);


--
-- Name: baseball_pitching_stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('baseball_pitching_stats', 'id'), 852, true);


--
-- Name: basketball_defensive_stats; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE basketball_defensive_stats (
    id serial NOT NULL,
    steals_total character varying(100),
    steals_per_game character varying(100),
    blocks_total character varying(100),
    blocks_per_game character varying(100)
);


--
-- Name: basketball_defensive_stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('basketball_defensive_stats', 'id'), 164, true);


--
-- Name: basketball_event_states; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE basketball_event_states (
    id serial NOT NULL,
    event_id integer NOT NULL,
    current_state integer,
    sequence_number integer,
    period_value character varying(100),
    period_time_elapsed character varying(100),
    period_time_remaining character varying(100),
    context character varying(40)
);


--
-- Name: basketball_event_states_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('basketball_event_states', 'id'), 1, false);


--
-- Name: basketball_offensive_stats; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE basketball_offensive_stats (
    id serial NOT NULL,
    field_goals_made integer,
    field_goals_attempted integer,
    field_goals_percentage character varying(100),
    field_goals_per_game character varying(100),
    field_goals_attempted_per_game character varying(100),
    field_goals_percentage_adjusted character varying(100),
    three_pointers_made integer,
    three_pointers_attempted integer,
    three_pointers_percentage character varying(100),
    three_pointers_per_game character varying(100),
    three_pointers_attempted_per_game character varying(100),
    free_throws_made character varying(100),
    free_throws_attempted character varying(100),
    free_throws_percentage character varying(100),
    free_throws_per_game character varying(100),
    free_throws_attempted_per_game character varying(100),
    points_scored_total character varying(100),
    points_scored_per_game character varying(100),
    assists_total character varying(100),
    assists_per_game character varying(100),
    turnovers_total character varying(100),
    turnovers_per_game character varying(100),
    points_scored_off_turnovers character varying(100),
    points_scored_in_paint character varying(100),
    points_scored_on_second_chance character varying(100),
    points_scored_on_fast_break character varying(100)
);


--
-- Name: basketball_offensive_stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('basketball_offensive_stats', 'id'), 164, true);


--
-- Name: basketball_rebounding_stats; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE basketball_rebounding_stats (
    id serial NOT NULL,
    rebounds_total character varying(100),
    rebounds_per_game character varying(100),
    rebounds_defensive character varying(100),
    rebounds_offensive character varying(100),
    team_rebounds_total character varying(100),
    team_rebounds_per_game character varying(100),
    team_rebounds_defensive character varying(100),
    team_rebounds_offensive character varying(100)
);


--
-- Name: basketball_rebounding_stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('basketball_rebounding_stats', 'id'), 164, true);


--
-- Name: basketball_team_stats; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE basketball_team_stats (
    id serial NOT NULL,
    timeouts_left character varying(100),
    largest_lead character varying(100),
    fouls_total character varying(100),
    turnover_margin character varying(100)
);


--
-- Name: basketball_team_stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('basketball_team_stats', 'id'), 1, false);


--
-- Name: bookmakers; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE bookmakers (
    id serial NOT NULL,
    bookmaker_key character varying(100),
    publisher_id integer NOT NULL,
    location_id integer
);


--
-- Name: bookmakers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('bookmakers', 'id'), 1, false);


--
-- Name: core_person_stats; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE core_person_stats (
    id serial NOT NULL,
    time_played_event character varying(40),
    time_played_total character varying(40),
    time_played_event_average character varying(40),
    events_played integer,
    events_started integer,
    position_id integer
);


--
-- Name: core_person_stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('core_person_stats', 'id'), 2588, true);


--
-- Name: core_stats; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE core_stats (
    id serial NOT NULL,
    score character varying(100),
    score_opposing character varying(100),
    score_attempts character varying(100),
    score_attempts_opposing character varying(100),
    score_percentage character varying(100),
    score_percentage_opposing character varying(100)
);


--
-- Name: core_stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('core_stats', 'id'), 1, false);


--
-- Name: db_info; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE db_info (
    version character varying(100) DEFAULT 16 NOT NULL
);


--
-- Name: display_names; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE display_names (
    id serial NOT NULL,
    "language" character varying(100) NOT NULL,
    entity_type character varying(100) NOT NULL,
    entity_id integer NOT NULL,
    full_name character varying(100),
    first_name character varying(100),
    middle_name character varying(100),
    last_name character varying(100),
    alias character varying(100),
    abbreviation character varying(100),
    short_name character varying(100),
    prefix character varying(20),
    suffix character varying(20)
);


--
-- Name: display_names_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('display_names', 'id'), 3958, true);


--
-- Name: document_classes; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE document_classes (
    id serial NOT NULL,
    name character varying(100)
);


--
-- Name: document_classes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('document_classes', 'id'), 6, true);


--
-- Name: document_contents; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE document_contents (
    id serial NOT NULL,
    document_id integer NOT NULL,
    sportsml character varying(200),
    abstract text
);


--
-- Name: document_contents_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('document_contents', 'id'), 414, true);


--
-- Name: document_fixtures; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE document_fixtures (
    id serial NOT NULL,
    fixture_key character varying(100),
    publisher_id integer NOT NULL,
    name character varying(100),
    document_class_id integer NOT NULL
);


--
-- Name: document_fixtures_events; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE document_fixtures_events (
    id serial NOT NULL,
    document_fixture_id integer NOT NULL,
    event_id integer NOT NULL,
    latest_document_id integer NOT NULL,
    last_update timestamp without time zone
);


--
-- Name: document_fixtures_events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('document_fixtures_events', 'id'), 7915, true);


--
-- Name: document_fixtures_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('document_fixtures', 'id'), 12, true);


--
-- Name: document_package_entry; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE document_package_entry (
    id serial NOT NULL,
    document_package_id integer NOT NULL,
    rank character varying(100),
    document_id integer NOT NULL,
    headline character varying(100),
    short_headline character varying(100)
);


--
-- Name: document_package_entry_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('document_package_entry', 'id'), 1, false);


--
-- Name: document_packages; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE document_packages (
    id serial NOT NULL,
    package_key character varying(100),
    package_name character varying(100),
    date_time date
);


--
-- Name: document_packages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('document_packages', 'id'), 1, false);


--
-- Name: documents; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE documents (
    id serial NOT NULL,
    doc_id character varying(75) NOT NULL,
    publisher_id integer NOT NULL,
    date_time timestamp without time zone,
    title character varying(255),
    "language" character varying(100),
    priority character varying(100),
    revision_id character varying(75),
    stats_coverage character varying(100),
    document_fixture_id integer NOT NULL,
    source_id integer,
    db_loading_date_time timestamp without time zone
);


--
-- Name: documents_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('documents', 'id'), 414, true);


--
-- Name: documents_media; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE documents_media (
    id serial NOT NULL,
    document_id integer NOT NULL,
    media_id integer NOT NULL,
    media_caption_id integer NOT NULL
);


--
-- Name: documents_media_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('documents_media', 'id'), 1, false);


--
-- Name: events; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE events (
    id serial NOT NULL,
    event_key character varying(100) NOT NULL,
    publisher_id integer NOT NULL,
    start_date_time timestamp without time zone,
    site_id integer,
    site_alignment character varying(100),
    event_status character varying(100),
    duration character varying(100),
    attendance character varying(100),
    last_update timestamp without time zone
);


--
-- Name: events_documents; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE events_documents (
    event_id integer NOT NULL,
    document_id integer NOT NULL
);


--
-- Name: events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('events', 'id'), 4350, true);


--
-- Name: events_media; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE events_media (
    event_id integer NOT NULL,
    media_id integer NOT NULL
);


--
-- Name: events_sub_seasons; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE events_sub_seasons (
    event_id integer NOT NULL,
    sub_season_id integer NOT NULL
);


--
-- Name: ice_hockey_action_participants; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE ice_hockey_action_participants (
    id serial NOT NULL,
    ice_hockey_action_play_id integer NOT NULL,
    person_id integer NOT NULL,
    participant_role character varying(100) NOT NULL,
    point_credit integer
);


--
-- Name: ice_hockey_action_participants_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('ice_hockey_action_participants', 'id'), 199, true);


--
-- Name: ice_hockey_action_plays; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE ice_hockey_action_plays (
    id serial NOT NULL,
    ice_hockey_event_state_id integer NOT NULL,
    play_type character varying(100),
    score_attempt_type character varying(100),
    play_result character varying(100),
    "comment" character varying(255)
);


--
-- Name: ice_hockey_action_plays_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('ice_hockey_action_plays', 'id'), 51, true);


--
-- Name: ice_hockey_defensive_stats; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE ice_hockey_defensive_stats (
    id serial NOT NULL,
    shots_power_play_allowed character varying(100),
    shots_penalty_shot_allowed character varying(100),
    goals_power_play_allowed character varying(100),
    goals_penalty_shot_allowed character varying(100),
    goals_against_average character varying(100),
    saves character varying(100),
    save_percentage character varying(100),
    penalty_killing_amount character varying(100),
    penalty_killing_percentage character varying(100),
    shots_blocked character varying(100),
    takeaways character varying(100),
    shutouts character varying(100),
    minutes_penalty_killing character varying(100),
    hits character varying(100),
    goals_empty_net_allowed character varying(100),
    goals_short_handed_allowed character varying(100),
    goals_shootout_allowed character varying(100),
    shots_shootout_allowed character varying(100)
);


--
-- Name: ice_hockey_defensive_stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('ice_hockey_defensive_stats', 'id'), 94, true);


--
-- Name: ice_hockey_event_states; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE ice_hockey_event_states (
    id serial NOT NULL,
    event_id integer NOT NULL,
    current_state integer,
    sequence_number integer,
    period_value character varying(100),
    period_time_elapsed character varying(100),
    period_time_remaining character varying(100),
    context character varying(40)
);


--
-- Name: ice_hockey_event_states_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('ice_hockey_event_states', 'id'), 51, true);


--
-- Name: ice_hockey_offensive_stats; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE ice_hockey_offensive_stats (
    id serial NOT NULL,
    goals_game_winning character varying(100),
    goals_game_tying character varying(100),
    goals_power_play character varying(100),
    goals_short_handed character varying(100),
    goals_even_strength character varying(100),
    goals_empty_net character varying(100),
    goals_overtime character varying(100),
    goals_shootout character varying(100),
    goals_penalty_shot character varying(100),
    assists character varying(100),
    points character varying(100),
    power_play_amount character varying(100),
    power_play_percentage character varying(100),
    shots_penalty_shot_taken character varying(100),
    shots_penalty_shot_missed character varying(100),
    shots_penalty_shot_percentage character varying(100),
    giveaways character varying(100),
    minutes_power_play character varying(100),
    faceoff_wins character varying(100),
    faceoff_losses character varying(100),
    faceoff_win_percentage character varying(100),
    scoring_chances character varying(100)
);


--
-- Name: ice_hockey_offensive_stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('ice_hockey_offensive_stats', 'id'), 1112, true);


--
-- Name: ice_hockey_player_stats; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE ice_hockey_player_stats (
    id serial NOT NULL,
    plus_minus character varying(100)
);


--
-- Name: ice_hockey_player_stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('ice_hockey_player_stats', 'id'), 1072, true);


--
-- Name: injury_phases; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE injury_phases (
    id serial NOT NULL,
    person_id integer NOT NULL,
    injury_status character varying(100),
    injury_type character varying(100),
    injury_comment character varying(100),
    disabled_list character varying(100),
    start_date_time timestamp without time zone,
    end_date_time timestamp without time zone,
    season_id integer,
    phase_type character varying(100),
    injury_side character varying(100)
);


--
-- Name: injury_phases_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('injury_phases', 'id'), 771, true);


--
-- Name: key_aliases; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE key_aliases (
    id serial NOT NULL,
    key_id integer NOT NULL,
    key_root_id integer NOT NULL
);


--
-- Name: key_aliases_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('key_aliases', 'id'), 1, false);


--
-- Name: key_roots; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE key_roots (
    id serial NOT NULL,
    key_type character varying(100)
);


--
-- Name: key_roots_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('key_roots', 'id'), 1, false);


--
-- Name: latest_revisions; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE latest_revisions (
    id serial NOT NULL,
    revision_id character varying(75) NOT NULL,
    latest_document_id integer NOT NULL
);


--
-- Name: latest_revisions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('latest_revisions', 'id'), 295, true);


--
-- Name: locations; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE locations (
    id serial NOT NULL,
    timezone character varying(100),
    latitude character varying(100),
    longitude character varying(100),
    country_code character varying(100)
);


--
-- Name: locations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('locations', 'id'), 1, false);


--
-- Name: media; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE media (
    id serial NOT NULL,
    object_id integer,
    source_id integer,
    revision_id integer,
    media_type character varying(100),
    publisher_id integer NOT NULL,
    date_time character varying(100),
    credit_id integer NOT NULL,
    db_loading_date_time timestamp without time zone,
    creation_location_id integer NOT NULL
);


--
-- Name: media_captions; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE media_captions (
    id serial NOT NULL,
    media_id integer NOT NULL,
    caption_type character varying(100),
    caption character varying(100),
    caption_author_id integer NOT NULL,
    "language" character varying(100),
    caption_size character varying(100)
);


--
-- Name: media_captions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('media_captions', 'id'), 1, false);


--
-- Name: media_contents; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE media_contents (
    id serial NOT NULL,
    media_id integer NOT NULL,
    "object" character varying(100),
    format character varying(100),
    mime_type character varying(100),
    height character varying(100),
    width character varying(100),
    duration character varying(100),
    file_size character varying(100),
    resolution character varying(100)
);


--
-- Name: media_contents_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('media_contents', 'id'), 1, false);


--
-- Name: media_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('media', 'id'), 1, false);


--
-- Name: media_keywords; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE media_keywords (
    id serial NOT NULL,
    keyword character varying(100),
    media_id integer NOT NULL
);


--
-- Name: media_keywords_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('media_keywords', 'id'), 1, false);


--
-- Name: motor_racing_event_states; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE motor_racing_event_states (
    id serial NOT NULL,
    event_id integer NOT NULL,
    current_state integer,
    sequence_number integer,
    lap character varying(100),
    laps_remaining character varying(100),
    time_elapsed character varying(100),
    flag_state character varying(100),
    context character varying(40)
);


--
-- Name: motor_racing_event_states_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('motor_racing_event_states', 'id'), 1, false);


--
-- Name: motor_racing_qualifying_stats; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE motor_racing_qualifying_stats (
    id serial NOT NULL,
    grid character varying(100),
    pole_position character varying(100),
    pole_wins character varying(100),
    qualifying_speed character varying(100),
    qualifying_speed_units character varying(100),
    qualifying_time character varying(100),
    qualifying_position character varying(100)
);


--
-- Name: motor_racing_qualifying_stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('motor_racing_qualifying_stats', 'id'), 1, false);


--
-- Name: motor_racing_race_stats; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE motor_racing_race_stats (
    id serial NOT NULL,
    time_behind_leader character varying(100),
    laps_behind_leader character varying(100),
    time_ahead_follower character varying(100),
    laps_ahead_follower character varying(100),
    "time" character varying(100),
    points character varying(100),
    points_rookie character varying(100),
    bonus character varying(100),
    laps_completed character varying(100),
    laps_leading_total character varying(100),
    distance_leading character varying(100),
    distance_completed character varying(100),
    distance_units character varying(40),
    speed_average character varying(40),
    speed_units character varying(40),
    status character varying(40),
    finishes_top_5 character varying(40),
    finishes_top_10 character varying(40),
    starts character varying(40),
    finishes character varying(40),
    non_finishes character varying(40),
    wins character varying(40),
    races_leading character varying(40),
    money character varying(40),
    money_units character varying(40),
    leads_total character varying(40)
);


--
-- Name: motor_racing_race_stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('motor_racing_race_stats', 'id'), 1, false);


--
-- Name: outcome_totals; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE outcome_totals (
    id serial NOT NULL,
    standing_subgroup_id integer NOT NULL,
    outcome_holder_type character varying(100),
    outcome_holder_id integer,
    rank character varying(100),
    wins character varying(100),
    losses character varying(100),
    ties character varying(100),
    undecideds character varying(100),
    winning_percentage character varying(100),
    points_scored_for character varying(100),
    points_scored_against character varying(100),
    points_difference character varying(100),
    standing_points character varying(100),
    streak_type character varying(100),
    streak_duration character varying(100),
    streak_total character varying(100),
    streak_start date,
    streak_end date
);


--
-- Name: outcome_totals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('outcome_totals', 'id'), 1, false);


--
-- Name: participants_events; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE participants_events (
    id serial NOT NULL,
    participant_type character varying(100) NOT NULL,
    participant_id integer NOT NULL,
    event_id integer NOT NULL,
    alignment character varying(100),
    score character varying(100),
    event_outcome character varying(100),
    rank integer
);


--
-- Name: participants_events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('participants_events', 'id'), 8700, true);


--
-- Name: periods; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE periods (
    id serial NOT NULL,
    participant_event_id integer NOT NULL,
    period_value character varying(100),
    score character varying(100)
);


--
-- Name: periods_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('periods', 'id'), 548, true);


--
-- Name: person_event_metadata; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE person_event_metadata (
    id serial NOT NULL,
    person_id integer NOT NULL,
    event_id integer NOT NULL,
    status character varying(100),
    health character varying(100),
    weight character varying(100),
    role_id integer,
    position_id integer,
    team_id integer,
    lineup_slot integer,
    lineup_slot_sequence integer
);


--
-- Name: person_event_metadata_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('person_event_metadata', 'id'), 4002, true);


--
-- Name: person_phases; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE person_phases (
    id serial NOT NULL,
    person_id integer NOT NULL,
    membership_type character varying(40) NOT NULL,
    membership_id integer NOT NULL,
    role_id integer,
    role_status character varying(40),
    phase_status character varying(40),
    uniform_number character varying(20),
    regular_position_id integer,
    regular_position_depth character varying(40),
    height character varying(100),
    weight character varying(100),
    start_date_time timestamp without time zone,
    start_season_id integer,
    end_date_time timestamp without time zone,
    end_season_id integer,
    entry_reason character varying(40),
    exit_reason character varying(40),
    selection_level integer,
    selection_sublevel integer,
    selection_overall integer
);


--
-- Name: person_phases_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('person_phases', 'id'), 1, false);


--
-- Name: persons; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE persons (
    id serial NOT NULL,
    person_key character varying(100) NOT NULL,
    publisher_id integer NOT NULL,
    gender character varying(20),
    birth_date character varying(30),
    death_date character varying(30),
    birth_location_id integer,
    hometown_location_id integer,
    residence_location_id integer,
    death_location_id integer
);


--
-- Name: persons_documents; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE persons_documents (
    person_id integer NOT NULL,
    document_id integer NOT NULL
);


--
-- Name: persons_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('persons', 'id'), 3937, true);


--
-- Name: persons_media; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE persons_media (
    person_id integer NOT NULL,
    media_id integer NOT NULL
);


--
-- Name: positions; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE positions (
    id serial NOT NULL,
    affiliation_id integer NOT NULL,
    abbreviation character varying(100) NOT NULL
);


--
-- Name: positions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('positions', 'id'), 73, true);


--
-- Name: publishers; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE publishers (
    id serial NOT NULL,
    publisher_key character varying(100) NOT NULL,
    publisher_name character varying(100)
);


--
-- Name: publishers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('publishers', 'id'), 1, true);


--
-- Name: roles; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE roles (
    id serial NOT NULL,
    role_key character varying(100) NOT NULL,
    role_name character varying(100),
    "comment" character varying(100)
);


--
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('roles', 'id'), 1, false);


--
-- Name: seasons; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE seasons (
    id serial NOT NULL,
    season_key integer NOT NULL,
    publisher_id integer NOT NULL,
    league_id integer NOT NULL,
    start_date_time timestamp without time zone,
    end_date_time timestamp without time zone
);


--
-- Name: seasons_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('seasons', 'id'), 4, true);


--
-- Name: sites; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE sites (
    id serial NOT NULL,
    site_key integer NOT NULL,
    publisher_id integer NOT NULL,
    location_id integer
);


--
-- Name: sites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('sites', 'id'), 1, false);


--
-- Name: soccer_defensive_stats; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE soccer_defensive_stats (
    id serial NOT NULL,
    shots_penalty_shot_allowed character varying(100),
    goals_penalty_shot_allowed character varying(100),
    goals_against_average character varying(100),
    goals_against_total character varying(100),
    saves character varying(100),
    save_percentage character varying(100),
    catches_punches character varying(100),
    shots_on_goal_total character varying(100),
    shots_shootout_total character varying(100),
    shots_shootout_allowed character varying(100),
    shots_blocked character varying(100),
    shutouts character varying(100)
);


--
-- Name: soccer_defensive_stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('soccer_defensive_stats', 'id'), 1, false);


--
-- Name: soccer_event_states; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE soccer_event_states (
    id serial NOT NULL,
    event_id integer NOT NULL,
    current_state integer,
    sequence_number integer,
    period_value character varying(100),
    period_time_elapsed character varying(100),
    period_time_remaining character varying(100),
    minutes_elapsed character varying(100),
    period_minute_elapsed character varying(100),
    context character varying(40)
);


--
-- Name: soccer_event_states_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('soccer_event_states', 'id'), 1, false);


--
-- Name: soccer_foul_stats; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE soccer_foul_stats (
    id serial NOT NULL,
    fouls_suffered character varying(100),
    fouls_commited character varying(100),
    cautions_total character varying(100),
    cautions_pending character varying(100),
    caution_points_total character varying(100),
    caution_points_pending character varying(100),
    ejections_total character varying(100)
);


--
-- Name: soccer_foul_stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('soccer_foul_stats', 'id'), 1, false);


--
-- Name: soccer_offensive_stats; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE soccer_offensive_stats (
    id serial NOT NULL,
    goals_game_winning character varying(100),
    goals_game_tying character varying(100),
    goals_overtime character varying(100),
    goals_shootout character varying(100),
    goals_total character varying(100),
    assists_game_winning character varying(100),
    assists_game_tying character varying(100),
    assists_overtime character varying(100),
    assists_total character varying(100),
    points character varying(100),
    shots_total character varying(100),
    shots_on_goal_total character varying(100),
    shots_hit_frame character varying(100),
    shots_penalty_shot_taken character varying(100),
    shots_penalty_shot_scored character varying(100),
    shots_penalty_shot_missed character varying(40),
    shots_penalty_shot_percentage character varying(40),
    shots_shootout_taken character varying(40),
    shots_shootout_scored character varying(40),
    shots_shootout_missed character varying(40),
    shots_shootout_percentage character varying(40),
    giveaways character varying(40),
    offsides character varying(40),
    corner_kicks character varying(40),
    hat_tricks character varying(40)
);


--
-- Name: soccer_offensive_stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('soccer_offensive_stats', 'id'), 1, false);


--
-- Name: standing_subgroups; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE standing_subgroups (
    id serial NOT NULL,
    standing_id integer NOT NULL,
    affiliation_id integer NOT NULL
);


--
-- Name: standing_subgroups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('standing_subgroups', 'id'), 1, false);


--
-- Name: standings; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE standings (
    id serial NOT NULL,
    affiliation_id integer NOT NULL,
    standing_type character varying(100),
    sub_season_id integer NOT NULL,
    last_updated character varying(100),
    duration_scope character varying(100),
    competition_scope character varying(100),
    competition_scope_id character varying(100),
    alignment_scope character varying(100),
    site_scope character varying(100),
    scoping_label character varying(100),
    publisher_id integer NOT NULL,
    source character varying(100)
);


--
-- Name: standings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('standings', 'id'), 1, false);


--
-- Name: stats; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE stats (
    id serial NOT NULL,
    stat_repository_type character varying(100),
    stat_repository_id integer NOT NULL,
    stat_holder_type character varying(100),
    stat_holder_id integer,
    stat_coverage_type character varying(100),
    stat_coverage_id integer,
    context character varying(40) NOT NULL
);


--
-- Name: stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('stats', 'id'), 12211, true);


--
-- Name: sub_periods; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE sub_periods (
    id serial NOT NULL,
    period_id integer NOT NULL,
    sub_period_value character varying(100),
    score character varying(100)
);


--
-- Name: sub_periods_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('sub_periods', 'id'), 1, false);


--
-- Name: sub_seasons; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE sub_seasons (
    id serial NOT NULL,
    sub_season_key character varying(100) NOT NULL,
    season_id integer NOT NULL,
    sub_season_type character varying(100) NOT NULL,
    start_date_time timestamp without time zone,
    end_date_time timestamp without time zone
);


--
-- Name: sub_seasons_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('sub_seasons', 'id'), 4, true);


--
-- Name: team_american_football_stats; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE team_american_football_stats (
    id serial NOT NULL,
    yards_per_attempt character varying(100),
    average_starting_position character varying(100),
    timeouts character varying(100),
    time_of_possession character varying(100),
    turnover_ratio character varying(100)
);


--
-- Name: team_american_football_stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('team_american_football_stats', 'id'), 36, true);


--
-- Name: team_phases; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE team_phases (
    id serial NOT NULL,
    team_id integer NOT NULL,
    start_season_id integer,
    end_season_id integer,
    affiliation_id integer NOT NULL,
    start_date_time character varying(100),
    end_date_time character varying(100),
    phase_status character varying(40),
    role_id integer
);


--
-- Name: team_phases_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('team_phases', 'id'), 368, true);


--
-- Name: teams; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE teams (
    id serial NOT NULL,
    team_key character varying(100) NOT NULL,
    publisher_id integer NOT NULL,
    home_site_id integer
);


--
-- Name: teams_documents; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE teams_documents (
    team_id integer NOT NULL,
    document_id integer NOT NULL
);


--
-- Name: teams_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('teams', 'id'), 128, true);


--
-- Name: teams_media; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE teams_media (
    team_id integer NOT NULL,
    media_id integer NOT NULL
);


--
-- Name: tennis_action_points; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE tennis_action_points (
    id serial NOT NULL,
    sub_period_id character varying(100),
    sequence_number character varying(100),
    win_type character varying(100)
);


--
-- Name: tennis_action_points_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('tennis_action_points', 'id'), 1, false);


--
-- Name: tennis_action_volleys; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE tennis_action_volleys (
    id serial NOT NULL,
    sequence_number character varying(100),
    tennis_action_points_id integer,
    landing_location character varying(100),
    swing_type character varying(100),
    result character varying(100),
    spin_type character varying(100),
    trajectory_details character varying(100)
);


--
-- Name: tennis_action_volleys_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('tennis_action_volleys', 'id'), 1, false);


--
-- Name: tennis_event_states; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE tennis_event_states (
    id serial NOT NULL,
    event_id integer NOT NULL,
    current_state integer,
    sequence_number integer,
    tennis_set character varying(100),
    game character varying(100),
    server_person_id integer,
    server_score character varying(100),
    receiver_person_id integer,
    receiver_score character varying(100),
    service_number character varying(100),
    context character varying(40)
);


--
-- Name: tennis_event_states_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('tennis_event_states', 'id'), 1, false);


--
-- Name: tennis_return_stats; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE tennis_return_stats (
    id serial NOT NULL,
    returns_played character varying(100),
    matches_played character varying(100),
    first_service_return_points_won character varying(100),
    first_service_return_points_won_pct character varying(100),
    second_service_return_points_won character varying(100),
    second_service_return_points_won_pct character varying(100),
    return_games_played character varying(100),
    return_games_won character varying(100),
    return_games_won_pct character varying(100),
    break_points_played character varying(100),
    break_points_converted character varying(100),
    break_points_converted_pct character varying(100)
);


--
-- Name: tennis_return_stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('tennis_return_stats', 'id'), 1, false);


--
-- Name: tennis_service_stats; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE tennis_service_stats (
    id serial NOT NULL,
    services_played character varying(100),
    matches_played character varying(100),
    aces character varying(100),
    first_services_good character varying(100),
    first_services_good_pct character varying(100),
    first_service_points_won character varying(100),
    first_service_points_won_pct character varying(100),
    second_service_points_won character varying(100),
    second_service_points_won_pct character varying(100),
    service_games_played character varying(100),
    service_games_won character varying(100),
    service_games_won_pct character varying(100),
    break_points_played character varying(100),
    break_points_saved character varying(100),
    break_points_saved_pct character varying(100)
);


--
-- Name: tennis_service_stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('tennis_service_stats', 'id'), 1, false);


--
-- Name: wagering_moneylines; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE wagering_moneylines (
    id serial NOT NULL,
    bookmaker_id integer NOT NULL,
    event_id integer NOT NULL,
    date_time timestamp without time zone,
    team_id integer NOT NULL,
    person_id integer,
    rotation_key character varying(100),
    "comment" character varying(100),
    vigorish character varying(100),
    line character varying(100),
    line_opening character varying(100),
    prediction character varying(100)
);


--
-- Name: wagering_moneylines_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('wagering_moneylines', 'id'), 1, false);


--
-- Name: wagering_odds_lines; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE wagering_odds_lines (
    id serial NOT NULL,
    bookmaker_id integer NOT NULL,
    event_id integer NOT NULL,
    date_time timestamp without time zone,
    team_id integer NOT NULL,
    person_id integer,
    rotation_key character varying(100),
    "comment" character varying(100),
    numerator character varying(100),
    denominator character varying(100),
    prediction character varying(100),
    payout_calculation character varying(100),
    payout_amount character varying(100)
);


--
-- Name: wagering_odds_lines_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('wagering_odds_lines', 'id'), 1, false);


--
-- Name: wagering_runlines; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE wagering_runlines (
    id serial NOT NULL,
    bookmaker_id integer NOT NULL,
    event_id integer NOT NULL,
    date_time timestamp without time zone,
    team_id integer NOT NULL,
    person_id integer,
    rotation_key character varying(100),
    "comment" character varying(100),
    vigorish character varying(100),
    line character varying(100),
    line_opening character varying(100),
    line_value character varying(100),
    prediction character varying(100)
);


--
-- Name: wagering_runlines_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('wagering_runlines', 'id'), 1, false);


--
-- Name: wagering_straight_spread_lines; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE wagering_straight_spread_lines (
    id serial NOT NULL,
    bookmaker_id integer NOT NULL,
    event_id integer NOT NULL,
    date_time timestamp without time zone,
    team_id integer NOT NULL,
    person_id integer,
    rotation_key character varying(100),
    "comment" character varying(100),
    vigorish character varying(100),
    line_value character varying(100),
    line_value_opening character varying(100),
    prediction character varying(100)
);


--
-- Name: wagering_straight_spread_lines_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('wagering_straight_spread_lines', 'id'), 1, false);


--
-- Name: wagering_total_score_lines; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE wagering_total_score_lines (
    id serial NOT NULL,
    bookmaker_id integer NOT NULL,
    event_id integer NOT NULL,
    date_time timestamp without time zone,
    team_id integer NOT NULL,
    person_id integer,
    rotation_key character varying(100),
    "comment" character varying(100),
    vigorish character varying(100),
    line_over character varying(100),
    line_under character varying(100),
    total character varying(100),
    total_opening character varying(100),
    prediction character varying(100)
);


--
-- Name: wagering_total_score_lines_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('wagering_total_score_lines', 'id'), 1, false);


--
-- Name: weather_conditions; Type: TABLE; Schema: public; Owner: postgres81; Tablespace: 
--

CREATE TABLE weather_conditions (
    id serial NOT NULL,
    event_id integer NOT NULL,
    temperature character varying(100),
    temperature_units character varying(40),
    humidity character varying(100),
    clouds character varying(100),
    wind_direction character varying(100),
    wind_velocity character varying(100),
    weather_code character varying(100)
);


--
-- Name: weather_conditions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres81
--

SELECT pg_catalog.setval(pg_catalog.pg_get_serial_sequence('weather_conditions', 'id'), 1, false);