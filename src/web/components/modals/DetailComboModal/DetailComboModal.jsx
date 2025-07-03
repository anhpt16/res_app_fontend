import React from "react";
import { useFetchComboDetail } from "../../../hooks/useMenu";
import { Modal } from "antd";
import { ClockIcon } from "../../../../shared/utils/icons/Icons";
import { Divider } from "antd";
import { DetailDishesComboModal } from "./DetailDishesComboModal";
import { formatPrice } from "../../../../shared/utils/utils";
import { config } from "../../../../shared/utils/env";

export const DetailComboModal = ({open, comboId, close}) => {

    const { data: comboDetail, isLoading: isLoadingComboDetail, isError: isErrorComboDetail } = useFetchComboDetail(comboId);

    if (isLoadingComboDetail) {

        return (
            <div className="mb-20 w-2/3 max-lg:w-full max-lg:mt-20 flex justify-center items-center min-h-[200px]">
                <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
        )
    }
    if (isErrorComboDetail) {
        return <p className="text-white text-2xl font-medium">Lỗi khi tải dữ liệu</p>
    }

    if (comboDetail) {
        const combo = comboDetail?.data;
        const thumbnail = combo?.thumbnail ? `${config.API_MEDIA}${combo?.thumbnail}` : "/combo_default.png";
        return (
            <Modal
            open={open}
            onCancel={close}
            footer={null}
            width={600}
            className="modal-detail">
                <div className="min-h-[700px] max-md:min-h-[600px]">
                    <div className="flex flex-row max-md:flex-col gap-x-8">
                        <div className="flex justify-center items-center">
                            <img src={thumbnail} alt={combo?.name} className="w-[200px] h-[200px] object-cover rounded-xl" />
                        </div>
                        <div className="max-md:mt-4">
                            <p className="text-xl font-medium">{combo?.name}</p>
                            <div className="flex flex-col gap-y-2 mt-3">
                                <div className="flex">
                                    <p className="text-sm font-medium w-[100px]">Thực đơn:</p>
                                    <p className="text-sm">Combo</p>
                                </div>
                                <div className="flex">
                                    <p className="text-sm font-medium w-[100px]">Giá:</p>
                                    <div className="text-sm">
                                        <span>
                                            {combo?.priceDiscount ? `${formatPrice(combo?.priceDiscount)}đ` : `${formatPrice(combo?.price)}đ`}
                                        </span>
                                        <span className="ms-4 text-gray-400 line-through">
                                            {combo?.priceDiscount && `${formatPrice(combo?.price)}đ`}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-base font-medium">Mô tả chi tiết</p>
                        <div className="w-15 modal-detail-divider">
                            <Divider className="bg-amber-500 rounded h-[3px]"/>
                        </div>
                        <div className="mt-3 flex gap-2">
                            <ClockIcon className="h-5 w-5" />
                            <span className="text-sm">
                                {combo?.durationFrom && combo?.durationFrom}
                                {combo?.durationFrom && combo?.durationTo && " - "}
                                {combo?.durationTo && combo?.durationTo}
                                {combo?.durationFrom && combo?.durationTo && " phút"}
                            </span>
                        </div>
                        <div className="text-sm mt-3">
                            <p>{combo?.description}</p>
                        </div>
                        <DetailDishesComboModal comboId={combo?.id} comboVersionId={combo?.comboVersionId} />
                        {/* <div className="mt-3 flex flex-col gap-2">
                            <div className="flex text-amber-500">
                                <p className="w-[160px]">Thời gian giảm giá:</p>
                                <span>2d:19:23:10</span>
                            </div>
                            <div className="flex text-amber-500">
                                <p className="w-[160px]">Sắp ra mắt:</p>
                                <div className="flex items-center gap-1">
                                    <DateIcon className="w-4 h-4"/>
                                    <span>17/04/2024</span>
                                </div>
                            </div>
                            <div className="flex text-red-600">
                                <p className="w-[160px]">Sắp kết thúc:</p>
                                <div className="flex items-center gap-1">
                                    <DateIcon className="w-4 h-4"/>
                                    <span>17/04/2024</span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </Modal>
        )
    }
}
