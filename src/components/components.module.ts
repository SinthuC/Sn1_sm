import { NgModule } from '@angular/core';
import { Sn1Sec1Component } from './sn1-sec1/sn1-sec1';
import { Sn1Sec2Component } from './sn1-sec2/sn1-sec2';
@NgModule({
	declarations: [Sn1Sec1Component,
    Sn1Sec2Component],
	imports: [],
	exports: [Sn1Sec1Component,
    Sn1Sec2Component]
})
export class ComponentsModule {}
