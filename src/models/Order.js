import { v4 as uuid } from "uuid";

export default class Order{

    constructor(){

        this.id=uuid();

        this.number="";

        this.mechanicId="";

        this.workshopId="";

        this.vehicle={};

        this.customer={};

        this.parts=[];

        this.invoice=null;

        this.photos=[];

        this.signature="";

        this.status="PENDING";

        this.createdAt=new Date();

        this.updatedAt=new Date();

    }

}
