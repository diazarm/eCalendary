import { create } from 'zustand'

export const useBusinessStore = create((set) => ({


  hasBusiness : false,
  setHasBusiness: (newHasBusiness) =>  set((state) => ({hasBusiness : newHasBusiness})),

  serviceName : "Peluqueria pepito",
  setServiceName: (newServiceName) =>  set((state) => ({serviceName : newServiceName})),

  serviceId : "f33d074b-038d-41bb-8f93-079829e17b86", //consultoria abap
  setServiceId: (newServiceId) =>  set((state) => ({serviceId : newServiceId})),

  serviceResponse : {},
  setServiceResponse: (newServiceResponse) =>  set((state) => ({serviceResponse : newServiceResponse})),



}))