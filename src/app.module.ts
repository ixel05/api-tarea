import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriasModule } from './categorias/categorias.module';
import { CiudadesModule } from './ciudades/ciudades.module';

@Module({
  imports: [CategoriasModule, CiudadesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
