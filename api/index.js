import regeneratorRuntime, { async } from '../lib/runtime/runtime';

export const  addCartApi= (data) =>{
	return uni.$ajax.post({
		url: 'mp/shoppingCart/add',
		data: data
	})
}

export const  updateCartApi= (data) =>{
	return uni.$ajax.post({
		url: 'mp/shoppingCart/sub',
		data: data
	})
}
export const  getStoreApi= (data) =>{
	return uni.$ajax.get({
		url: 'mp/store/page',
		data: data
	})
}
export const  getLocation= (data) =>{
	return uni.$ajax.get({
		url: 'mp/map/getAddress',
		data: data
	})
}
export const  getPlatformLabel= () =>{
	return uni.$ajax.get({
		url: 'mp/store/platformLabel'
	})
}

export const  clearCartApi= () =>{
	return uni.$ajax.delete({
		url: 'mp/shoppingCart/clean',
		
	})
}

export const  setMealDishDetailsApi= (id) =>{
	return uni.$ajax.get({
		url: `mp/setmeal/${id}`,
		
	})
}

export const  dishListApi= (data) =>{
	return uni.$ajax.get({
		url: 'mp/dish/list',
		data: { ...data }
	})
}
export const  setmealListApi= (data) =>{
	return uni.$ajax.get({
		url: 'mp/setmeal/list',
		data: { ...data }
	})
}
// 修改后的 categoryListApi 方法
export const categoryListApi = (storeId) => {
    return uni.$ajax.get({
        url: "mp/category/list",
        params: { storeId } // 将 storeId 作为请求参数传递
    });
};
export const cartListApi = (data) => {
	return uni.$ajax.get({
		url: "mp/shoppingCart/list",
		data: { ...data }
	})
}

