--
-- PostgreSQL database dump
--

-- Dumped from database version 13.0 (Debian 13.0-1.pgdg100+1)
-- Dumped by pg_dump version 13.0

-- Started on 2020-11-07 19:16:59

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

DROP DATABASE vochat;
--
-- TOC entry 2947 (class 1262 OID 16384)
-- Name: vochat; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE vochat WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE vochat OWNER TO postgres;

\connect vochat

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
-- TOC entry 202 (class 1259 OID 16451)
-- Name: tokens; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tokens (
    id integer NOT NULL,
    token character varying NOT NULL,
    "sessionId" character varying NOT NULL,
    name character varying NOT NULL,
    role integer NOT NULL,
    expires timestamp without time zone NOT NULL
);


ALTER TABLE public.tokens OWNER TO postgres;

--
-- TOC entry 201 (class 1259 OID 16449)
-- Name: tokens_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tokens_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tokens_id_seq OWNER TO postgres;

--
-- TOC entry 2948 (class 0 OID 0)
-- Dependencies: 201
-- Name: tokens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tokens_id_seq OWNED BY public.tokens.id;


--
-- TOC entry 2807 (class 2604 OID 16454)
-- Name: tokens id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tokens ALTER COLUMN id SET DEFAULT nextval('public.tokens_id_seq'::regclass);


--
-- TOC entry 2941 (class 0 OID 16451)
-- Dependencies: 202
-- Data for Name: tokens; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tokens (id, token, "sessionId", name, role, expires) VALUES (2, 'token-t2', 's2', 'token name t2', 1, '2020-11-02 18:24:07.586');
INSERT INTO public.tokens (id, token, "sessionId", name, role, expires) VALUES (3, 'token-t3', 's3', 'token name t3', 1, '2020-11-03 18:24:07.586');
INSERT INTO public.tokens (id, token, "sessionId", name, role, expires) VALUES (4, 'token-t4', 's4', 'token name t4', 1, '2020-11-04 18:24:07.586');
INSERT INTO public.tokens (id, token, "sessionId", name, role, expires) VALUES (5, 'token-t5', 's4', 'token name t5', 1, '2020-11-05 18:24:07.586');
INSERT INTO public.tokens (id, token, "sessionId", name, role, expires) VALUES (6, 'token-t6', 's4', 'token name t6', 1, '2020-11-06 18:24:07.586');


--
-- TOC entry 2949 (class 0 OID 0)
-- Dependencies: 201
-- Name: tokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tokens_id_seq', 1, false);


--
-- TOC entry 2809 (class 2606 OID 16459)
-- Name: tokens PK_3001e89ada36263dabf1fb6210a; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT "PK_3001e89ada36263dabf1fb6210a" PRIMARY KEY (id);


-- Completed on 2020-11-07 19:16:59

--
-- PostgreSQL database dump complete
--

