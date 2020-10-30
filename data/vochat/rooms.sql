--
-- PostgreSQL database dump
--

-- Dumped from database version 12.1
-- Dumped by pg_dump version 12.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: rooms; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rooms (
    id character varying(64) NOT NULL,
    name character varying(100),
    description character varying,
    moderator character varying(64),
    apiKey    character varying(64),
    sessionId character varying(128),
    token character varying
);

ALTER TABLE public.rooms OWNER TO postgres;

--
-- Data for Name: rooms; Type: TABLE DATA; Schema: public; Owner: postgres
--
INSERT INTO public.rooms (id, name, description, moderator, apiKey, sessionId, token) VALUES (
    'room-id-31', 
    'Room name 31' , 
    'Description text 31',
    'guttih',
    '46968744',
    '2_MX40Njk2ODc0NH5-MTYwMzk3MDUxMDY0OX55ZnUvVjg0dEZ1L216WGFWYmRCM1hvMmh-fg',
    'T1==cGFydG5lcl9pZD00Njk2ODc0NCZzaWc9YTllODZhMzNlOTkyNzIyOTIzNjcyNGQ2MWU2ZjZhZTkyNzdiZWU2MDpzZXNzaW9uX2lkPTJfTVg0ME5qazJPRGMwTkg1LU1UWXdNemszTURVeE1EWTBPWDU1Wm5VdlZqZzBkRVoxTDIxNldHRldZbVJDTTFodk1taC1mZyZjcmVhdGVfdGltZT0xNjAzOTcwNzM3Jm5vbmNlPTAuNjE4Mzk5NzM5MDg5NTI2NCZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjA0NTc5MTM1JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9'
);
INSERT INTO public.rooms (id, name, description, moderator) VALUES ('room-id-1',  'Room name  1' , 'Description text 1' , 'moderator-id-1');
INSERT INTO public.rooms (id, name, description, moderator) VALUES ('room-id-2',  'Room name  2' , 'Description text 2' , 'moderator-id-1');
INSERT INTO public.rooms (id, name, description, moderator) VALUES ('room-id-3',  'Room name  3' , 'Description text 3' , 'moderator-id-1');
INSERT INTO public.rooms (id, name, description, moderator) VALUES ('room-id-4',  'Room name  4' , 'Description text 4' , 'moderator-id-1');
INSERT INTO public.rooms (id, name, description, moderator) VALUES ('room-id-5',  'Room name  5' , 'Description text 5' , 'moderator-id-1');
INSERT INTO public.rooms (id, name, description, moderator) VALUES ('room-id-6',  'Room name  6' , 'Description text 6' , 'moderator-id-1');
INSERT INTO public.rooms (id, name, description, moderator) VALUES ('room-id-7',  'Room name  7' , 'Description text 7' , 'moderator-id-1');
INSERT INTO public.rooms (id, name, description, moderator) VALUES ('room-id-8',  'Room name  8' , 'Description text 8' , 'moderator-id-1');
INSERT INTO public.rooms (id, name, description, moderator) VALUES ('room-id-9',  'Room name  9' , 'Description text 9' , 'moderator-id-1');
INSERT INTO public.rooms (id, name, description, moderator) VALUES ('room-id-10', 'Room name 10' , 'Description text 10', 'moderator-id-2');
INSERT INTO public.rooms (id, name, description, moderator) VALUES ('room-id-11', 'Room name 11' , 'Description text 11', 'moderator-id-2');
INSERT INTO public.rooms (id, name, description, moderator) VALUES ('room-id-12', 'Room name 12' , 'Description text 12', 'moderator-id-2');
INSERT INTO public.rooms (id, name, description, moderator) VALUES ('room-id-13', 'Room name 13' , 'Description text 13', 'moderator-id-2');
INSERT INTO public.rooms (id, name, description, moderator) VALUES ('room-id-14', 'Room name 14' , 'Description text 14', 'moderator-id-2');
INSERT INTO public.rooms (id, name, description, moderator) VALUES ('room-id-15', 'Room name 15' , 'Description text 15', 'moderator-id-2');
INSERT INTO public.rooms (id, name, description, moderator) VALUES ('room-id-16', 'Room name 16' , 'Description text 16', 'moderator-id-2');
INSERT INTO public.rooms (id, name, description, moderator) VALUES ('room-id-17', 'Room name 17' , 'Description text 17', 'moderator-id-2');
INSERT INTO public.rooms (id, name, description, moderator) VALUES ('room-id-18', 'Room name 18' , 'Description text 18', 'moderator-id-2');
INSERT INTO public.rooms (id, name, description, moderator) VALUES ('room-id-19', 'Room name 19' , 'Description text 19', 'moderator-id-3');
INSERT INTO public.rooms (id, name, description, moderator) VALUES ('room-id-20', 'Room name 20' , 'Description text 20', 'moderator-id-3');
INSERT INTO public.rooms (id, name, description, moderator) VALUES ('room-id-21', 'Room name 21' , 'Description text 21', 'moderator-id-3');
INSERT INTO public.rooms (id, name, description, moderator) VALUES ('room-id-22', 'Room name 22' , 'Description text 22', 'moderator-id-3');
INSERT INTO public.rooms (id, name, description, moderator) VALUES ('room-id-23', 'Room name 23' , 'Description text 23', 'moderator-id-3');
INSERT INTO public.rooms (id, name, description, moderator) VALUES ('room-id-24', 'Room name 24' , 'Description text 24', 'moderator-id-3');
INSERT INTO public.rooms (id, name, description, moderator) VALUES ('room-id-25', 'Room name 25' , 'Description text 25', 'moderator-id-3');
INSERT INTO public.rooms (id, name, description, moderator) VALUES ('room-id-26', 'Room name 26' , 'Description text 26', 'moderator-id-3');
INSERT INTO public.rooms (id, name, description, moderator) VALUES ('room-id-27', 'Room name 27' , 'Description text 27', 'moderator-id-3');
INSERT INTO public.rooms (id, name, description, moderator) VALUES ('room-id-28', 'Room name 28' , 'Description text 28', 'moderator-id-3');
INSERT INTO public.rooms (id, name, description, moderator) VALUES ('room-id-29', 'Room name 29' , 'Description text 29', 'moderator-id-3');
INSERT INTO public.rooms (id, name, description, moderator) VALUES ('room-id-30', 'Room name 30' , 'Description text 30', 'guttih');

INSERT INTO public.rooms (id, name, description) VALUES ('room-id-32', 'Room name 32' , 'Description text 32');


--
-- Name: rooms rooms_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rooms
    ADD CONSTRAINT rooms_pkey PRIMARY KEY (id);
--
-- PostgreSQL database dump complete
--

