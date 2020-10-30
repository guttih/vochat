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
-- Name: moderators; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.moderators (
    id character varying(64) NOT NULL,
    name character varying(100)
);

ALTER TABLE public.moderators OWNER TO postgres;

--
-- Data for Name: moderators; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.moderators (id, name) VALUES ('moderator-id-1',  'moderator name 1');
INSERT INTO public.moderators (id, name) VALUES ('moderator-id-2',  'moderator name 2');
INSERT INTO public.moderators (id, name) VALUES ('moderator-id-3',  'moderator name 3');
INSERT INTO public.moderators (id, name) VALUES ('guttih',  'Guðjón Hólm Sigurðsson');
INSERT INTO public.moderators (id, name) VALUES ('moderator-id-5',  'moderator name 5');

--
-- Name: moderators moderators_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.moderators
    ADD CONSTRAINT moderators_pkey PRIMARY KEY (id);
--
-- PostgreSQL database dump complete
--

