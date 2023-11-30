import { NgModule } from "@angular/core";
import { BasicoFactory } from "src/app/models/servicios";
import { PlusFactory } from "src/app/models/servicios";
import { PremiumFactory } from "src/app/models/servicios";

@NgModule({
    providers: [BasicoFactory, PlusFactory, PremiumFactory],
  })
  export class ServicioFactoriesModule {}