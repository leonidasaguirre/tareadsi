import { Injectable } from '@nestjs/common';
import { PrismaClient } from '/Users/jaque/OneDrive/Desktop/TAREADISEÑODESISTEMA/my_first_proyect_loam/generated/prisma/client';


@Injectable()
export class PrismaService extends PrismaClient {}
