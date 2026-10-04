# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: db\NewAccountDBVerification.spec.js >> @master Verify new account in admin and DB
- Location: tests\db\NewAccountDBVerification.spec.js:6:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('link', { name: 'Customers' }) resolved to 2 elements:
    1) <a class="parent" href="#collapse5" aria-expanded="true" data-toggle="collapse">…</a> aka getByRole('link', { name: ' Customers ' })
    2) <a href="http://localhost/opencart/upload/admin/index.php?route=customer/customer&user_token=KQv5mwISoOVacf9z8uvvY5ZJraPL3S2K">Customers</a> aka getByRole('link', { name: 'Customers' })

Call log:
  - waiting for getByRole('link', { name: 'Customers' })

```

# Page snapshot

```yaml
- generic [ref=f1e2]:
  - banner [ref=f1e3]:
    - generic [ref=f1e4]:
      - link [ref=f1e6] [cursor=pointer]:
        - /url: http://localhost/opencart/upload/admin/index.php?route=common/dashboard&user_token=KQv5mwISoOVacf9z8uvvY5ZJraPL3S2K
        - img "OpenCart" [ref=f1e7]
      - text: 
      - list [ref=f1e8]:
        - listitem [ref=f1e9]:
          - link "John DoeJohn Doe " [ref=f1e10] [cursor=pointer]:
            - /url: "#"
            - img "John Doe" [ref=f1e11]
            - text: John Doe
            - generic [ref=f1e12]: 
          - text:    
        - listitem [ref=f1e13]:
          - link " Logout" [ref=f1e14] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/admin/index.php?route=common/logout&user_token=KQv5mwISoOVacf9z8uvvY5ZJraPL3S2K
            - generic [ref=f1e15]: 
            - text: Logout
  - navigation [ref=f1e16]:
    - generic [ref=f1e17]:
      - generic [ref=f1e18]: 
      - text: Navigation
    - list [ref=f1e19]:
      - listitem [ref=f1e20]:
        - link " Dashboard" [ref=f1e21] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/admin/index.php?route=common/dashboard&user_token=KQv5mwISoOVacf9z8uvvY5ZJraPL3S2K
          - generic [ref=f1e22]: 
          - text: Dashboard
      - listitem [ref=f1e23]:
        - link " Catalog " [ref=f1e24] [cursor=pointer]:
          - /url: "#collapse1"
          - generic [ref=f1e25]: 
          - text: Catalog 
        - text:             
      - listitem [ref=f1e26]:
        - link " Extensions " [ref=f1e27] [cursor=pointer]:
          - /url: "#collapse2"
          - generic [ref=f1e28]: 
          - text: Extensions 
        - text:     
      - listitem [ref=f1e29]:
        - link " Design " [ref=f1e30] [cursor=pointer]:
          - /url: "#collapse3"
          - generic [ref=f1e31]: 
          - text: Design 
        - text:     
      - listitem [ref=f1e32]:
        - link " Sales " [ref=f1e33] [cursor=pointer]:
          - /url: "#collapse4"
          - generic [ref=f1e34]: 
          - text: Sales 
        - text:       
      - listitem [ref=f1e35]:
        - link " Customers " [expanded] [active] [ref=f1e36] [cursor=pointer]:
          - /url: "#collapse5"
          - generic [ref=f1e37]: 
          - text: Customers 
        - list [ref=f1e38]:
          - listitem [ref=f1e39]:
            - link "Customers" [ref=f1e40] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/admin/index.php?route=customer/customer&user_token=KQv5mwISoOVacf9z8uvvY5ZJraPL3S2K
          - listitem [ref=f1e41]:
            - link "Customer Groups" [ref=f1e42] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/admin/index.php?route=customer/customer_group&user_token=KQv5mwISoOVacf9z8uvvY5ZJraPL3S2K
          - listitem [ref=f1e43]:
            - link "Customer Approvals" [ref=f1e44] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/admin/index.php?route=customer/customer_approval&user_token=KQv5mwISoOVacf9z8uvvY5ZJraPL3S2K
          - listitem [ref=f1e45]:
            - link "Custom Fields" [ref=f1e46] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/admin/index.php?route=customer/custom_field&user_token=KQv5mwISoOVacf9z8uvvY5ZJraPL3S2K
      - listitem [ref=f1e47]:
        - link " Marketing " [ref=f1e48] [cursor=pointer]:
          - /url: "#collapse6"
          - generic [ref=f1e49]: 
          - text: Marketing 
        - text:      
      - listitem [ref=f1e50]:
        - link " System " [ref=f1e51] [cursor=pointer]:
          - /url: "#collapse7"
          - generic [ref=f1e52]: 
          - text: System 
        - text:                                
      - listitem [ref=f1e53]:
        - link " Reports " [ref=f1e54] [cursor=pointer]:
          - /url: "#collapse8"
          - generic [ref=f1e55]: 
          - text: Reports 
        - text:   
    - list [ref=f1e57]:
      - listitem [ref=f1e58]:
        - generic [ref=f1e59]:
          - text: Orders Completed
          - generic [ref=f1e60]: 0%
        - generic [ref=f1e61]:
          - progressbar:
            - generic [ref=f1e62]: 0%
      - listitem [ref=f1e63]:
        - generic [ref=f1e64]:
          - text: Orders Processing
          - generic [ref=f1e65]: 0%
        - generic [ref=f1e66]:
          - progressbar:
            - generic [ref=f1e67]: 0%
      - listitem [ref=f1e68]:
        - generic [ref=f1e69]:
          - text: Other Statuses
          - generic [ref=f1e70]: 0%
        - generic [ref=f1e71]:
          - progressbar:
            - generic [ref=f1e72]: 0%
  - generic [ref=f1e73]:
    - generic [ref=f1e75]:
      - button "" [ref=f1e77] [cursor=pointer]
      - heading "Dashboard" [level=1] [ref=f1e79]
      - list [ref=f1e80]:
        - listitem [ref=f1e81]:
          - link "Home" [ref=f1e82] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/admin/index.php?route=common/dashboard&user_token=KQv5mwISoOVacf9z8uvvY5ZJraPL3S2K
        - listitem [ref=f1e83]:
          - text: 
          - link "Dashboard" [ref=f1e84] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/admin/index.php?route=common/dashboard&user_token=KQv5mwISoOVacf9z8uvvY5ZJraPL3S2K
    - generic [ref=f1e85]:
      - generic [ref=f1e86]:
        - generic [ref=f1e88]:
          - generic [ref=f1e89]:
            - text: Total Orders
            - generic [ref=f1e90]: 0%
          - generic [ref=f1e91]:
            - generic [ref=f1e92]: 
            - heading "0" [level=2] [ref=f1e93]
          - link "View more..." [ref=f1e95] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/admin/index.php?route=sale/order&user_token=KQv5mwISoOVacf9z8uvvY5ZJraPL3S2K
        - generic [ref=f1e97]:
          - generic [ref=f1e98]:
            - text: Total Sales
            - generic [ref=f1e99]: 0%
          - generic [ref=f1e100]:
            - generic [ref=f1e101]: 
            - heading "0" [level=2] [ref=f1e102]
          - link "View more..." [ref=f1e104] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/admin/index.php?route=sale/order&user_token=KQv5mwISoOVacf9z8uvvY5ZJraPL3S2K
        - generic [ref=f1e106]:
          - generic [ref=f1e107]:
            - text: Total Customers
            - generic [ref=f1e108]:
              - generic [ref=f1e109]: 
              - text: 100%
          - generic [ref=f1e110]:
            - generic [ref=f1e111]: 
            - heading "7" [level=2] [ref=f1e112]
          - link "View more..." [ref=f1e114] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/admin/index.php?route=customer/customer&user_token=KQv5mwISoOVacf9z8uvvY5ZJraPL3S2K
        - generic [ref=f1e116]:
          - generic [ref=f1e117]: People Online
          - generic [ref=f1e118]:
            - generic [ref=f1e119]: 
            - heading "0" [level=2] [ref=f1e120]
          - link "View more..." [ref=f1e122] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/admin/index.php?route=report/online&user_token=KQv5mwISoOVacf9z8uvvY5ZJraPL3S2K
      - generic [ref=f1e123]:
        - generic [ref=f1e125]:
          - heading " World Map" [level=3] [ref=f1e127]:
            - generic [ref=f1e128]: 
            - text: World Map
          - generic [ref=f1e130]:
            - generic [ref=f1e315] [cursor=pointer]: +
            - generic [ref=f1e316] [cursor=pointer]: −
        - generic [ref=f1e318]:
          - generic [ref=f1e319]:
            - link "" [ref=f1e321] [cursor=pointer]:
              - /url: "#"
            - heading " Sales Analytics" [level=3] [ref=f1e324]:
              - generic [ref=f1e325]: 
              - text: Sales Analytics
          - generic [ref=f1e327]:
            - generic [ref=f1e329]:
              - generic [ref=f1e330]:
                - generic [ref=f1e331]: "01"
                - generic [ref=f1e332]: "10"
                - generic [ref=f1e333]: "11"
                - generic [ref=f1e334]: "12"
                - generic [ref=f1e335]: "13"
                - generic [ref=f1e336]: "14"
                - generic [ref=f1e337]: "15"
                - generic [ref=f1e338]: "16"
                - generic [ref=f1e339]: "17"
                - generic [ref=f1e340]: "18"
                - generic [ref=f1e341]: "19"
                - generic [ref=f1e342]: "20"
                - generic [ref=f1e343]: "21"
                - generic [ref=f1e344]: "22"
                - generic [ref=f1e345]: "23"
                - generic [ref=f1e346]: "24"
                - generic [ref=f1e347]: "25"
                - generic [ref=f1e348]: "26"
                - generic [ref=f1e349]: "27"
                - generic [ref=f1e350]: "28"
                - generic [ref=f1e351]: "29"
                - generic [ref=f1e352]: "30"
                - generic [ref=f1e353]: "31"
                - generic [ref=f1e354]: "02"
                - generic [ref=f1e355]: "03"
                - generic [ref=f1e356]: "04"
                - generic [ref=f1e357]: "05"
                - generic [ref=f1e358]: "06"
                - generic [ref=f1e359]: "07"
                - generic [ref=f1e360]: "08"
                - generic [ref=f1e361]: "09"
              - generic [ref=f1e362]:
                - generic [ref=f1e363]: "0"
                - generic [ref=f1e364]: "1"
                - generic [ref=f1e365]: "2"
                - generic [ref=f1e366]: "3"
                - generic [ref=f1e367]: "4"
                - generic [ref=f1e368]: "5"
                - generic [ref=f1e369]: "6"
                - generic [ref=f1e370]: "7"
            - table [ref=f1e373]:
              - rowgroup [ref=f1e374]:
                - row [ref=f1e375]:
                  - cell [ref=f1e376]
                  - cell "Orders" [ref=f1e379]
                - row [ref=f1e380]:
                  - cell [ref=f1e381]
                  - cell "Customers" [ref=f1e384]
      - generic [ref=f1e385]:
        - generic [ref=f1e387]:
          - heading " Recent Activity" [level=3] [ref=f1e389]:
            - generic [ref=f1e390]: 
            - text: Recent Activity
          - list [ref=f1e391]:
            - listitem [ref=f1e392]: No results!
        - generic [ref=f1e394]:
          - heading " Latest Orders" [level=3] [ref=f1e396]:
            - generic [ref=f1e397]: 
            - text: Latest Orders
          - table [ref=f1e399]:
            - rowgroup [ref=f1e400]:
              - row [ref=f1e401]:
                - cell "Order ID" [ref=f1e402]
                - cell "Customer" [ref=f1e403]
                - cell "Status" [ref=f1e404]
                - cell "Date Added" [ref=f1e405]
                - cell "Total" [ref=f1e406]
                - cell "Action" [ref=f1e407]
            - rowgroup [ref=f1e408]:
              - row [ref=f1e409]:
                - cell "No results!" [ref=f1e410]
    - text:         
  - contentinfo [ref=f1e411]:
    - link "OpenCart" [ref=f1e412] [cursor=pointer]:
      - /url: http://www.opencart.com
    - text: © 2009-2026 All Rights Reserved.Version 3.0.4.1
```

# Test source

```ts
  1  | export class DashboardPage {
  2  |     constructor(page){
  3  |         this.page = page;
  4  |         this.linkCustomer = page.getByRole("link",{name:"Customers"});
  5  |         this.linkCustomerMenu = page.locator("li#menu-customer");
  6  |         
  7  |     }
  8  | 
  9  |     async navigateToCustomerPage(){
  10 |         await this.linkCustomerMenu.click();
> 11 |         await this.linkCustomer.click();
     |                                 ^ Error: locator.click: Error: strict mode violation: getByRole('link', { name: 'Customers' }) resolved to 2 elements:
  12 |     }
  13 | }
```