
import React from 'react';
export type FileType = "document" | "image" | "video" | "audio" | "other";

export interface ActionType {
  label: string;
  icon: string;
  value: string;
}

export interface SegmentParams {
  [key: string]: string | number | boolean | string[] | number[] | undefined;
}

export interface SearchParamProps {
  params?: Promise<SegmentParams>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export interface UploadFileProps {
  file: File;
  ownerId: string;
  accountId: string;
  path: string;
}

export interface GetFilesProps {
  types: FileType[];
  searchText?: string;
  sort?: string;
  limit?: number;
}

export interface RenameFileProps {
  fileId: string;
  name: string;
  extension: string;
  path: string;
}

export interface UpdateFileUsersProps {
  fileId: string;
  emails: string[];
  path: string;
}

export interface DeleteFileProps {
  fileId: string;
  bucketFileId: string;
  path: string;
}

export interface FileUploaderProps {
  ownerId: string;
  accountId: string;
  className?: string;
}

export interface MobileNavigationProps {
  ownerId: string;
  accountId: string;
  fullName: string;
  avatar: string;
  email: string;
}

export interface SidebarProps {
  fullName: string;
  avatar: string;
  email: string;
}

export interface ThumbnailProps {
  type: string;
  extension: string;
  url: string;
  className?: string;
  imageClassName?: string;
}

// You'll need to define Models or import it from your appwrite library
// For now, I'll create a placeholder interface
export interface Document {
  id?: string;
  name?: string;
  email?: string;
  $id: string;
  $updatedAt: string;
  // Add other properties as needed
}

export interface ShareInputProps {
  file: Document;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove: (email: string) => void;
}

export interface UsageCategory {
  size: number;
  latestDate: string; // ISO string or Date, but your code uses string
}

export type TotalSpace = {
  document: UsageCategory;
  image: UsageCategory;
  video: UsageCategory;
  audio: UsageCategory;
  other: UsageCategory;
  used: number;
  all: number;
};
