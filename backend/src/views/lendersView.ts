import Lender from "../model/lenders";

export default {
    render(lender: Lender){
        return {
            id: lender.id,
            name: lender.name,
            latitude: lender.latitude,
            longitude: lender.longitude,
            min_price: lender.min_price,
            max_price: lender.max_price,
            consequences: lender.consequences,
            contact: lender.contact
        }
    },

    renderMany(lenders: Array<Lender>) {
        return lenders.map(lender => this.render(lender));
    }
}