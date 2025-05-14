"use server";
import { Account, Avatars, Client, Databases, Storage } from "node-appwrite";
import { appwriteConfig } from "./config";
import { cookies } from "next/headers";

export const createSessionClient = async () => {
    const client = new Client()
        .setEndpoint(appwriteConfig.endpointUrl)
        .setProject(appwriteConfig.projectId);
    
    const session = (await cookies()).get('appwrite-session');
    
    // Return a client object with isAuthenticated flag
    if (!session || !session.value) {
        return {
            isAuthenticated: false,
            get account() {
                return new Account(client);
            },
            get databases() {
                return new Databases(client);
            },
            get storage() {
                return new Storage(client);
            },
            get avatars() {
                return new Avatars(client);
            }
        };
    }
    
    client.setSession(session.value);
    
    return {
        isAuthenticated: true,
        get account() {
            return new Account(client);
        },
        get databases() {
            return new Databases(client);
        },
        get storage() {
            return new Storage(client);
        },
        get avatars() {
            return new Avatars(client);
        }
    };
};

export const createAdminClient = async () => {
    const client = new Client()
        .setEndpoint(appwriteConfig.endpointUrl)
        .setProject(appwriteConfig.projectId)
        .setKey(appwriteConfig.secretKey);
    
    return {
        get account() {
            return new Account(client);
        },
        get databases() {
            return new Databases(client);
        },
        get storage() {
            return new Storage(client);
        },
        get avatars() {
            return new Avatars(client);
        }
    };
};