create extension if not exists "uuid-ossp";

create table article (
    id uuid primary key default uuid_generate_v4(),
    title varchar(255) not null,
    body text not null,
    img_illustration_b64 text not null,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);
