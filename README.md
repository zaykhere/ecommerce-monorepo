# Threadly

**Threadly** is a scalable, event-driven e-commerce platform built with a modern microservices architecture and managed within a Turborepo monorepo. It leverages Apache Kafka for robust asynchronous communication between services, ensuring high performance and decoupling.

This project demonstrates advanced expertise in building distributed systems, utilizing industry-standard tools and practices for backend scalability and frontend excellence.

## 🚀 Key Features

*   **Microservices Architecture**: Discrete services for Auth, Order, Product, Payment, and Email, allowing independent scaling and deployment.
*   **Event-Driven Communication**: Powered by **Apache Kafka**, ensuring reliable data consistency and asynchronous processing across services.
*   **Monorepo Strategy**: Managed with **Turborepo** and **PNPM Workspaces** for efficient build pipelines, shared code, and unified dependency management.
*   **Modern Frontend**:
    *   **Admin Dashboard**: Built with Next.js 15, React 19, Shadcn UI, and React Query for a premium management experience.
    *   **Client Storefront**: A high-performance e-commerce storefront using Next.js 15, Zustand for state management, and Stripe for payments.
*   **Type Safety**: End-to-end TypeScript support across all apps and shared packages.
*   **Centralized Authentication**: Integrated with Clerk for secure and seamless user management.

## 🏗 Architecture Overview

Threadly follows a **Monorepo Microservices** pattern. Code is organized into `apps` (deployable services/applications) and `packages` (shared libraries).

### Communication Flow
Inter-service communication is primarily asynchronous, governed by an Event Bus pattern using Kafka.
*   **Example**: When an order is placed in the `order-service`, an `OrderCreated` event is published to Kafka. The `payment-service`, `product-service` (inventory), and `email-service` consume this event to perform their respective tasks without direct coupling.

### Project Structure

```text
├── apps
│   ├── admin             # Next.js Admin Dashboard
│   ├── client            # Next.js Customer Storefront
│   ├── auth-service      # Express + Clerk Auth Service
│   ├── order-service     # Fastify + MongoDB Order Management
│   ├── product-service   # Express + MongoDB Product Catalog
│   ├── payment-service   # Payment Processing Service
│   └── email-service     # Notification Service
├── packages
│   ├── kafka             # Shared Kafka client wrappers (Producer/Consumer)
│   ├── order-db          # Mongoose models & connection for Order DB
│   ├── product-db        # Mongoose models & connection for Product DB
│   ├── types             # Shared TypeScript definitions (DTOs, Events)
│   ├── eslint-config     # Shared linting configuration
│   └── typescript-config # Shared TS configuration
```

## 🛠 Tech Stack

### Core
*   **Monorepo**: Turborepo, PNPM
*   **Runtime**: Node.js
*   **Languages**: TypeScript

### Backend Infrastructure
*   **Message Broker**: Apache Kafka (Zookeeper)
*   **Databases**: MongoDB (Mongoose Application-Level access)
*   **Microservices**: Express, Fastify

### Frontend
*   **Framework**: Next.js 15 (App Router)
*   **Styling**: TailwindCSS, Shadcn UI, Lucide React
*   **State Management**: Zustand, React Query/TanStack Query
*   **Forms**: React Hook Form, Zod

### DevOps & Tools
*   **Containerization**: Docker (for Kafka/Zookeeper)
*   **Linting/Formatting**: ESLint, Prettier

## 🏁 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites
*   **Node.js** (v18 or higher)
*   **PNPM** (`npm install -g pnpm`)
*   **Docker Desktop** (Required for running Kafka)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/zaykhere/ecommerce-monorepo.git
    cd ecommerce-monorepo
    ```

2.  **Install dependencies**
    ```bash
    pnpm install
    ```

3.  **Start Infrastructure (Kafka)**
    This project requires Kafka to be running for inter-service communication.
    ```bash
    cd packages/kafka
    docker-compose up -d
    ```

4.  **Set up Environment Variables**
    Create `.env` files in each service directory (`apps/*/`). Refer to `.env.example` in each directory for required keys (Database URLs, Clerk Keys, Stripe Keys, etc.).

5.  **Run the Applications**
    From the root directory, you can start all services in development mode using Turbo:
    ```bash
    pnpm dev
    ```
    *   **Admin**: http://localhost:3003
    *   **Client**: http://localhost:3002
    *   **Services**: Various ports (check console output)

## 📦 Service Details

| Service | Port | Tech Stack | Description |
| :--- | :--- | :--- | :--- |
| **Admin** | 3003 | Next.js, React 19 | Back-office dashboard for managing products and orders. |
| **Client** | 3002 | Next.js, React 19 | Customer-facing storefront. |
| **Auth** | 8004 | Express, Clerk | Handles user authentication and identity events. |
| **Order** | 8001 | Fastify, MongoDB | Manages order lifecycle and persistence. |
| **Product** | 8003 | Express, MongoDB | Manages product catalog and inventory. |
| **Payment** | 8002 | Hono | Processes payments and handles transaction events. |
| **Email** | - | Node.js | Sends transactional emails based on system events. |

---

*Built with ❤️ by Zain Javed*