import React from "react";
import { useFetchDishesByCombo } from "../../../hooks/useMenu";
import { config } from "../../../../shared/utils/env";

export const DetailDishesComboModal = ({comboId, comboVersionId}) => {
  
    const { data: dishesByCombo, isLoading: isLoadingDishesByCombo, isError: isErrorDishesByCombo } = useFetchDishesByCombo(comboId, comboVersionId);

    const renderDishesCombo = () => {
        if (isLoadingDishesByCombo) {
            return (
                <div className="mb-20 w-2/3 max-lg:w-full max-lg:mt-20 flex justify-center items-center min-h-[200px]">
                    <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
            )
        }
        if (isErrorDishesByCombo) {
            return <p className="text-white text-2xl font-medium">Lỗi khi tải dữ liệu</p>
        }
        if (dishesByCombo?.data && dishesByCombo?.data?.length <= 0) {
            return (
                <div className="text-sm text-gray-500 text-center">Chưa có món ăn</div>
            )
        }
        if (dishesByCombo?.data && dishesByCombo?.data?.length > 0) {
            return (
                <>
                    {dishesByCombo?.data?.map((dish) => (
                        <div className="w-1/2 flex flex-row gap-x-4" key={dish?.id}>
                            <div className="flex items-center">
                                <img className="w-[60px] max-md:w-[50px] aspect-square rounded-full object-cover" src={dish?.thumbnail ? `${config.API_MEDIA}${dish?.thumbnail}` : "/meal_detail_default.webp"} alt={dish?.name}/>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <p className="text-sm font-medium">{dish?.name}</p>
                                <p className="text-sm text-gray-500">{`x ${dish?.count} ${dish?.unit}`}</p>
                            </div>
                        </div>
                    ))}
                </>
            )
        }
    }

    return (
        <div className="mt-6 flex flex-wrap gap-y-4">
            {renderDishesCombo()}
        </div>
    )
}
