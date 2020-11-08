--
-- PostgreSQL database dump
--

-- Dumped from database version 13.0 (Debian 13.0-1.pgdg100+1)
-- Dumped by pg_dump version 13.0

-- Started on 2020-11-08 10:21:50

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
-- TOC entry 2945 (class 1262 OID 16384)
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
-- TOC entry 202 (class 1259 OID 24588)
-- Name: sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sessions (
    id character varying NOT NULL,
    name character varying NOT NULL,
    description character varying NOT NULL,
    "mediaMode" character varying NOT NULL,
    "archiveMode" character varying NOT NULL,
    active boolean NOT NULL,
    "apiKey" character varying NOT NULL
);


ALTER TABLE public.sessions OWNER TO postgres;

--
-- TOC entry 2939 (class 0 OID 24588)
-- Dependencies: 202
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.sessions (id, name, description, "mediaMode", "archiveMode", active, "apiKey") VALUES ('2_MX40Njk2ODc0NH5-MTYwNDUxMzQ1OTc3MH4xQWtCbFpydE5jd2xqc1pmR0N0ZG9FMmJ-UH4', 'Technical assistant from Gudjon', 'Get personal technical assistant from our experts.', 'relayed', 'always', false, '46968744');
INSERT INTO public.sessions (id, name, description, "mediaMode", "archiveMode", active, "apiKey") VALUES ('1_MX40Njk2ODc0NH5-MTYwNDUxNDYzMDc0MH45VVI3WlBlWVFKUFhiRjFCV1J6R3drZUx-UH4', 'game making assistant from Gudjon', 'Get personal technical assistant from our experts.', 'relayed', 'always', true, '46968744');
INSERT INTO public.sessions (id, name, description, "mediaMode", "archiveMode", active, "apiKey") VALUES ('s4', 'Game development', 'Leiknir Sveinsson aðstoðar við leikjagerð í Unity leikjarvélinni.', 'relayed', 'manual', false, '12345678');
INSERT INTO public.sessions (id, name, description, "mediaMode", "archiveMode", active, "apiKey") VALUES ('s1', 'Office', 'Jón Jónsson aðstoðar með notkun á Microsoft 365 vörum', 'relayed', 'manual', false, '12345678');
INSERT INTO public.sessions (id, name, description, "mediaMode", "archiveMode", active, "apiKey") VALUES ('s2', 'Vefhjálp', 'Herdís aðstoðar við almenna tölvuhjálp í windows stýrikerfinu og einnig með forrit eða annað sem komið getur upp.', 'relayed', 'manual', false, '12345678');
INSERT INTO public.sessions (id, name, description, "mediaMode", "archiveMode", active, "apiKey") VALUES ('s3', 'Microsoft Windows', 'Hallgerður aðstoðar við notkun á veflausnum Advania.  Eins og t.d. hvernig skal aðgangsstýra, setja inn eða taka út efni o.fl', 'relayed', 'manual', false, '12345678');


--
-- TOC entry 2808 (class 2606 OID 24595)
-- Name: sessions PK_3238ef96f18b355b671619111bc; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "PK_3238ef96f18b355b671619111bc" PRIMARY KEY (id);


-- Completed on 2020-11-08 10:21:50

--
-- PostgreSQL database dump complete
--

