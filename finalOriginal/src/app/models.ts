export interface ICategory {
    id: number;
    name: string;
}

export interface IProduct {
    id: number;
    category: string;
    name: string;
    price: number;
    url: string;
}
export interface IAdmin {
    username: string;
    password: string;
}

export interface IUser {
    name: string;
    username: string;
    email: string;
    password: string;
}

export interface IAlertConfig {
    title: string;
    content: string;
    isSuccess?: number;
    marginY?: string;
    marginX?: string;
    showTitle?: boolean;
    hasCloseBtn?: boolean;
    duration?: number;
    showDuration?: boolean;
    close?: () => void;
  }
  
export interface IConfirmConfig {
title?: string;
content?: string;
cancelText?: string;
confirmText?: string;
close?: (result?: boolean) => void;
}