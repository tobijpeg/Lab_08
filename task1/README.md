# Lab 08 - Task 1

MORBEKOVA KAMILLA

## Description

This project is a blog built with Next.js and TypeScript.

## Rendering Strategy

- Home page uses SSG with ISR via `getStaticProps`
- Post pages use SSG with dynamic routes via `getStaticPaths` and `getStaticProps`

## SSR vs SSG

SSG builds pages at build time and is faster.
SSR renders pages on every request and always provides fresh data.
