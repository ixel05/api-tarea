import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriasModule } from './categorias/categorias.module';
import { CiudadesModule } from './ciudades/ciudades.module';
import { GenerosModule } from './generos/generos.module';
import { MarcasModule } from './marcas/marcas.module';

@Module({
  imports: [CategoriasModule, CiudadesModule, GenerosModule, MarcasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
