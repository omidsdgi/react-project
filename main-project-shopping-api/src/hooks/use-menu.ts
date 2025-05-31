import {useQuery} from "@tanstack/react-query";
import {getMenuApiCall} from "@/api/Menu";
import {EntityType, MenuItemType, MenuType, PopulateType} from "@/types";

interface Prop {
    position:string;
}
export function useMenu ({position}:Prop) {

    const {data: menuData} = useQuery({
        queryKey: [getMenuApiCall.name],
        queryFn: () => getMenuApiCall()
    });


    let menuItems: null | PopulateType<MenuItemType> = null

    if (menuData) {
        const findMenu = menuData.data.filter((item: EntityType<MenuType>) => item.attributes.position === position);

        console.log('position', findMenu)
        if (findMenu.length > 0) {
            menuItems = findMenu[0].attributes.menu_items

            menuItems.data.sort((a: EntityType<MenuItemType>, b: EntityType<MenuItemType>) => {
                if (a.attributes.rank < b.attributes.rank)
                    return -1
                if (a.attributes.rank > b.attributes.rank)
                    return 1
                return 0
            })
        }
    }
    return {data: menuItems};
}
