import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Check } from 'typeorm';
import 'reflect-metadata';
import { TradingPoint } from './trading-point.js';
import { ProductDirectory } from './product-directory.js';
import { Employee } from './employee.js';
import {TransferStatus} from './enum/transfer-status.js';
import {Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType()
@Entity({ name: 'inventory_transfers' })
export class InventoryTransfer {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({
    name: 'source_point_id',
    type: 'int',
    nullable: false
  })
  sourcePointId!: number;

  @Field()
  @ManyToOne(() => TradingPoint)
  @JoinColumn({
    name: 'source_point_id'
  })
  sourcePoint!: TradingPoint;

  @Field()
  @Column({
    name: 'destination_point_id',
    type: 'int',
    nullable: false
  })
  destinationPointId!: number;

  @Field()
  @ManyToOne(() => TradingPoint)
  @JoinColumn({
    name: 'destination_point_id'
  })
  destinationPoint!: TradingPoint;

  @Field()
  @Column({
    name: 'product_id',
    type: 'int',
    nullable: false
  })
  productId!: number;

  @Field()
  @ManyToOne(() => ProductDirectory)
  @JoinColumn({
    name: 'product_id'
  })
  product!: ProductDirectory;

  @Field()
  @Column({
    type: 'int',
    nullable: false
  })
  @Check('positive_quantity', 'quantity > 0')
  quantity!: number;

  @Field()
  @Column({
    name: 'transfer_date',
    type: 'timestamp',
    default: () => 'CURRENT_DATE'
  })
  transferDate!: Date;

  @Field()
  @Column({
    name: 'initiated_by',
    type: 'int',
    nullable: false
  })
  initiatedById!: number;

  @Field()
  @ManyToOne(() => Employee)
  @JoinColumn({
    name: 'initiated_by'
  })
  initiatedBy!: Employee;

  @Field()
  @Column({
    name: 'approved_by',
    type: 'int',
    nullable: true
  })
  approvedById?: number;

  @Field()
  @ManyToOne(() => Employee)
  @JoinColumn({
    name: 'approved_by'
  })
  approvedBy?: Employee;

  @Field()
  @Column({
    type: 'enum',
    enum: TransferStatus,
    default: TransferStatus.PLANNED
  })
  status!: TransferStatus;
  
  constructor(data?: {
    sourcePointId: number;
    destinationPointId: number;
    productId: number;
    quantity: number;
    initiatedById: number;
    approvedById?: number;
    status?: TransferStatus;
  }) {
    if (data) {
      this.sourcePointId = data.sourcePointId;
      this.destinationPointId = data.destinationPointId;
      this.productId = data.productId;
      this.quantity = data.quantity;
      this.initiatedById = data.initiatedById;
      this.approvedById = data.approvedById;
      this.status = data.status || TransferStatus.PLANNED;
      this.transferDate = new Date();
    }
  }
}2