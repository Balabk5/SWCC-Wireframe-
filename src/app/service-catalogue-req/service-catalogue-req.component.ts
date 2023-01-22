import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-catalogue-req',
  templateUrl: './service-catalogue-req.component.html',
  styleUrls: ['./service-catalogue-req.component.scss']
})
export class ServiceCatalogueReqComponent implements OnInit {

  searchText;
  heroes = [
    {  serviceGroup: 'Human Resources', service: 'Recruitment', serviceCode: 'SSA-HR-1001-1',subService:'Internal Recruitment',description:'Employees for vacant jobs...',price:'13500',unit:'Per job request' },
    {  serviceGroup: 'Human Resources', service: 'Compensation and Rewards Management', serviceCode: 'SSA-HR-1003-1',subService:'SSA-HR-1003-1',description:'Process worker rewards payments and promotions...',price:'3038',unit:'Per worker' },
    {  serviceGroup: 'Human Resources', service: 'Learning and development', serviceCode: 'SSA-HR-1002-1',subService:'Employee learning and development',description:'Providing training programs for workers',price:'500',unit:'Per worker' },
    {  serviceGroup: 'Procurement and Supply Chain', service: 'Spare parts and equipment Purchase Requistion', serviceCode: 'SSA-P&SCM-2001-1',subService:'Local Purchase',description:'Validate and review approve/reject purchase request...',price:'1000',unit:'Changed per item' },
    {  serviceGroup: 'Procurement and Supply Chain', service: 'Project and Service Purchase Requistion', serviceCode: 'SSA-P&SCM-2002-2',subService:'Purchase Services 5M-100M',description:'Handling services and projects...',price:'2% (PO value)',unit:'Percentage of total purchase order value' },
    {  serviceGroup: 'Procurement and Supply Chain', service: 'Tenders post qualification', serviceCode: 'SSA-P&SCM-2006-1',subService:'Construction projects',description:'Proceed tenders for construction...',price:'2000',unit:'Per invitation' },
    {  serviceGroup: 'Finance', service: 'Account Payable', serviceCode: 'SSA-Finance-3001-1',subService:'Record and process invoices for payment',description:'Receipt,management,matching and posting...',price:'1000',unit:'Fixed fees for any invoice + fees based on the type' },
    {  serviceGroup: 'Finance', service: 'Account Receivable', serviceCode: 'SSA-Finance-3002-1',subService:'Manage and process account collections',description:'Defining and executing the strategies...',price:'1.5%',unit:'Charge as percentage per invoice' },
    {  serviceGroup: 'Finance', service: 'Asset Lifecycle', serviceCode: 'SSA-Finance-3005-2',subService:'Perform assets inventory',description:'Process of recognizing unrecorded depreciation...',price:'15000',unit:'Monthly subscription per account/asset' },
    {  serviceGroup: 'IT Serivces', service: 'Corporate Services', serviceCode: 'SSA-IT-4001-1',subService:'Email and ID',description:'Covers the creation of ID users...',price:'94',unit:'Per request' },
    {  serviceGroup: 'IT Services', service: 'Central IT Services', serviceCode: 'SSA-IT-4002-1',subService:'Network Point',description:'Extension and Activation of network points...',price:'500',unit:'Per request' },
    {  serviceGroup: 'IT Services', service: 'Communication Services', serviceCode: 'SSA-IT-4003-1',subService:'3.1.1 IP Telephone',description:'Provides IP Telephone...',price:'Based on offered price + 5% fee',unit:'Per request' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
