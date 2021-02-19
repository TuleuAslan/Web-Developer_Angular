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
