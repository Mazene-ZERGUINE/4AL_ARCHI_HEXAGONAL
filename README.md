# Project Architecture

This document outlines the architecture of the project, detailing the purpose and functionality of each component within the directory structure.

## Root Directory

- `App.ts`: The main application entry file that bootstraps and starts the application.

- `main.ts`: Another essential entry file that might be used for initializing or setting up specific configurations.

## adapters

Adapters are responsible for converting data between the application and external services or the presentation layer.

- `in`: Adapters that receive data from external sources or users.
  - `ReservationController.ts`: Manages incoming requests related to reservations.

- `out`: Adapters that send data out to external services or infrastructure.
  - `EmailNotifier.ts`: Sends out email notifications.
  - `InvoiceService.ts`: Manages invoice-related operations.
  - `ReservationRepository.ts`: Interfaces with the data layer to manage reservation data.

## application

Contains application logic including event handling, ports, and services.

- `events`: Defines application events.
  - `CreatePaymentEvent.ts`
  - `ReservationCreatedEvent.ts`
  - `ReservationDeletedEvent.ts`

- `ports`: Defines the API for the core application logic to interact with external layers.
  - `in`: Input ports for commands.
    - `CancelReservationCommande.ts`
    - `CreateReservationCommend.ts`
  - `out`: Output ports for external services interaction.
    - Various ports for reservation operations and notifications.

- `services`: Contains application services and handlers.
  - `CancelReservationHandler.ts`
  - `CreatePaymentHandler.ts`
  - `CreateReservationHandler.ts`
  - Service classes for reservation management.

## domain

Defines the core business logic and domain entities.

- `centre-sportif`: Entities related to the sports center domain.
- `client`: Client-related domain entities and logic.
- `reservation`: Reservation domain logic and entities.

## kernel

Core system components facilitating command and event handling.

- `Class.ts`: (Assuming it's a foundational class or utility)
- `bus`: Handles command and event bus mechanisms.
- `event`: Manages event dispatching and handling.

The structure provided aims to decouple various components of the application, adhering to clean architecture principles where domain logic is central and independent of external concerns.
