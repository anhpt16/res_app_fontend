import {} from "react";

import { MainCarousel } from "./MainCarousel";
import { Modal, Spin, Divider } from "antd";
import { ClockIcon, DateIcon } from "../../../../shared/utils/icons/Icons";
import "./DetailMealModal.css";
import { useFetchDishDetail } from "../../../hooks/useMenu";
import { formatPrice } from "../../../../shared/utils/utils";

export const DetailMealModal = ({open, dishId, close}) => {
    const { data: dishDetail, isLoading: isLoadingDishDetail, isError: isErrorDishDetail } = useFetchDishDetail(dishId);

    const renderModalContent = () => {
        if (!dishId) {
            return (
                <div className="w-full h-full flex justify-center items-center">
                    <p className="text-black text-xl font-medium">Có lỗi xảy ra</p>
                </div>
            );
        }
        if (isLoadingDishDetail) {
            return <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>;
        }
        if (isErrorDishDetail) {
            return (
                <div className="w-full h-full flex justify-center items-center">
                    <p className="text-white text-xl font-medium">Lỗi khi tải dữ liệu</p>
                </div>
            );
        }
        if (dishDetail?.data) {
            const dish = dishDetail?.data;
            return (
                <div className="min-h-[700px] max-md:min-h-[600px]">
                    <div className="flex flex-row max-md:flex-col gap-x-8">
                        <div>
                            <MainCarousel medias={dish?.medias} />
                        </div>
                        <div className="max-md:mt-4">
                            <p className="text-xl font-medium">{dish?.name}</p>
                            <div className="flex flex-col gap-y-2 mt-3">
                                <div className="flex">
                                    <p className="text-sm font-medium w-[100px]">Thực đơn:</p>
                                    <p className="text-sm">{dish?.categoryName}</p>
                                </div>
                                <div className="flex">
                                    <p className="text-sm font-medium w-[100px]">Đơn vị:</p>
                                    <p className="text-sm">{dish?.unit}</p>
                                </div>
                                <div className="flex">
                                    <p className="text-sm font-medium w-[100px]">Giá:</p>
                                    <div className="text-sm">
                                        <span>
                                            {dish?.priceDiscount ? `${formatPrice(dish?.priceDiscount)}đ` : `${formatPrice(dish?.price)}đ`}
                                        </span>
                                        <span className="ms-4 text-gray-400 line-through">
                                            {dish?.priceDiscount && `${formatPrice(dish?.price)}đ`}
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
                                {dish?.durationFrom && dish?.durationFrom}
                                {dish?.durationFrom && dish?.durationTo && " - "}
                                {dish?.durationTo && dish?.durationTo}
                                {dish?.durationFrom && dish?.durationTo && " phút"}
                            </span>
                        </div>
                        <div className="mt-2 flex gap-2">
                            <p className="font-medium text-sm">Nguyên liệu:</p>
                            <span className="text-sm">{dish?.ingradientDisplay}</span>
                        </div>
                        <div className="text-sm mt-3">
                            <p>{dish?.description}</p>
                        </div>
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
            );
        }
    }

    return (
        <Modal
        open={open}
        onCancel={close}
        footer={null}
        width={600}
        className="modal-detail">
            {renderModalContent()}
        </Modal>
    )
}
