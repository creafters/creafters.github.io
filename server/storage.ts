import { type User, type InsertUser, type InsertSubscriber, type Subscriber } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Subscriber methods
  getSubscriberByEmail(email: string): Promise<Subscriber | undefined>;
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  getSubscriberCount(): Promise<number>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private subscribers: Map<number, Subscriber>;
  currentId: number;
  subscriberId: number;

  constructor() {
    this.users = new Map();
    this.subscribers = new Map();
    this.currentId = 1;
    this.subscriberId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Subscriber methods implementation
  async getSubscriberByEmail(email: string): Promise<Subscriber | undefined> {
    return Array.from(this.subscribers.values()).find(
      (subscriber) => subscriber.email === email,
    );
  }
  
  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const id = this.subscriberId++;
    const now = new Date();
    const subscriber: Subscriber = { 
      ...insertSubscriber, 
      id, 
      createdAt: now 
    };
    this.subscribers.set(id, subscriber);
    return subscriber;
  }
  
  async getSubscriberCount(): Promise<number> {
    return this.subscribers.size;
  }
}

export const storage = new MemStorage();
