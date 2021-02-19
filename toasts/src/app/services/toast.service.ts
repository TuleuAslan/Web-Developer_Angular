import {Injectable, Injector} from '@angular/core';
import {Overlay, OverlayConfig, OverlayRef} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {AlertComponent} from '../components/alert/alert.component';
import {DIALOG_CONFIG} from './toast.tokens';
import {IAlertConfig, IConfirmConfig} from '../types';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private _overlay: Overlay) { }

  public async alert(
    config: IAlertConfig
  ): Promise<void> {
    return new Promise<any>((resolve, reject) => {
      const overlay = this._createOverlay({},
        {marginX: config.marginX, marginY: config.marginY});
      const injector = this._createInjector(overlay, {
        ...config,
        close: resolve,
      });
      const portal = new ComponentPortal(AlertComponent, null, injector);
      overlay.attach(portal);
    });
  }

  private _createInjector(
    ref: OverlayRef,
    config: IAlertConfig | IConfirmConfig
  ) {
    const injector = Injector.create({
      providers: [
        { provide: OverlayRef, useValue: ref },
        { provide: DIALOG_CONFIG, useValue: config },
      ],
    });
    return injector;
  }


  private _createOverlay(config: OverlayConfig = {}, cssSettings?: any): OverlayRef {
    const defaultConfig = {
      backdropClass: 'custom-modal-backdrop',
      hasBackdrop: true,
      positionStrategy: this._overlay
        .position()
        .global()
        .centerHorizontally(cssSettings.marginX)
        .centerVertically(cssSettings.marginY),
      scrollStrategy: this._overlay.scrollStrategies.block(),
    } as OverlayConfig;
    return this._overlay.create({ ...defaultConfig, ...config });
  }

}
