export interface IToast {
  id: number;
  title?: string;
  content: string;
  verticalPos: string;
  horizontalPos: string;
  isSuccess: number;
  showTitle: boolean;
  hasCloseBtn: boolean;
  durationValue: number;
  showDuration: boolean;
}
