# Lab 08 - Task 2

## Description

This project demonstrates Server-Side Rendering in Next.js.

## Pages

- `/dashboard` uses SSR with `getServerSideProps`
- `/about` uses SSG
- `/about-ssr` uses SSR

## SSR vs SSG

SSG is faster because HTML is generated at build time.
SSR is slower but provides fresh data on every request.
SSR increases server load because the server renders the page each time.
