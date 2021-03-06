export enum CustomerRequestType {
    Generic = 0,
    TellMeMore,
    Showing,
    NeighbourhoodInformation,
    RecentSalesInArea,
    WhatsMyHouseWorths,
    CreateAccount
}

export const getCustomerRequestTypeDisplayString = (type: CustomerRequestType) => {
    switch (type) {
        case CustomerRequestType.Generic:
            return 'Generic';
        
        case CustomerRequestType.TellMeMore:
            return 'Tell me more';

        case CustomerRequestType.Showing:
            return 'Showing';

        case CustomerRequestType.NeighbourhoodInformation:
            return 'Neighbourhood Information';

        case CustomerRequestType.RecentSalesInArea:
                return 'Recent Sales In Area';
    
        case CustomerRequestType.WhatsMyHouseWorths:
            return 'Whats My House Worths';

        case CustomerRequestType.CreateAccount:
            return 'Create account';

        default:
            throw `Unknown CustomerRequestType type: ${type}`;
    }
}