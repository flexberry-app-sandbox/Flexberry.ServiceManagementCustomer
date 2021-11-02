



CREATE TABLE "Feedback"
(

	"primaryKey" RAW(16) NOT NULL,

	"Ranking" NUMBER(10) NULL,

	"FeedbackText" NVARCHAR2(255) NULL,

	"Event_m0" RAW(16) NOT NULL,

	"Customer_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ServiceProvider"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" NVARCHAR2(255) NULL,

	"ContactInfo" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "CustomerRequest"
(

	"primaryKey" RAW(16) NOT NULL,

	"RequestDate" DATE NULL,

	"RequestText" NVARCHAR2(255) NULL,

	"Customer_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Event"
(

	"primaryKey" RAW(16) NOT NULL,

	"EventDate" DATE NULL,

	"EventType" NVARCHAR2(11) NULL,

	"StartTime" NVARCHAR2(255) NULL,

	"Duration" NVARCHAR2(255) NULL,

	"Description" NVARCHAR2(255) NULL,

	"ServiceProvider_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Customer"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" NVARCHAR2(255) NULL,

	"Surname" NVARCHAR2(255) NULL,

	"Phone" NVARCHAR2(255) NULL,

	"EMail" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Ticket"
(

	"primaryKey" RAW(16) NOT NULL,

	"TicketDate" DATE NULL,

	"Customer_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "TicketPosition"
(

	"primaryKey" RAW(16) NOT NULL,

	"Amount" NUMBER(10) NULL,

	"Event_m0" RAW(16) NOT NULL,

	"Ticket_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "Feedback"
	ADD CONSTRAINT "Feedback_FEvent_0" FOREIGN KEY ("Event_m0") REFERENCES "Event" ("primaryKey");

CREATE INDEX "Feedback_IEvent_m0" on "Feedback" ("Event_m0");

ALTER TABLE "Feedback"
	ADD CONSTRAINT "Feedback_FCustomer_0" FOREIGN KEY ("Customer_m0") REFERENCES "Customer" ("primaryKey");

CREATE INDEX "Feedback_ICustomer_m0" on "Feedback" ("Customer_m0");

ALTER TABLE "CustomerRequest"
	ADD CONSTRAINT "CustomerRequest_FCustomer_0" FOREIGN KEY ("Customer_m0") REFERENCES "Customer" ("primaryKey");

CREATE INDEX "CustomerRequest_ICustomer_m0" on "CustomerRequest" ("Customer_m0");

ALTER TABLE "Event"
	ADD CONSTRAINT "Event_FServiceProvider_0" FOREIGN KEY ("ServiceProvider_m0") REFERENCES "ServiceProvider" ("primaryKey");

CREATE INDEX "Event_IServiceProvider_m0" on "Event" ("ServiceProvider_m0");

ALTER TABLE "Ticket"
	ADD CONSTRAINT "Ticket_FCustomer_0" FOREIGN KEY ("Customer_m0") REFERENCES "Customer" ("primaryKey");

CREATE INDEX "Ticket_ICustomer_m0" on "Ticket" ("Customer_m0");

ALTER TABLE "TicketPosition"
	ADD CONSTRAINT "TicketPosition_FEvent_0" FOREIGN KEY ("Event_m0") REFERENCES "Event" ("primaryKey");

CREATE INDEX "TicketPosition_IEvent_m0" on "TicketPosition" ("Event_m0");

ALTER TABLE "TicketPosition"
	ADD CONSTRAINT "TicketPosition_FTicket_0" FOREIGN KEY ("Ticket_m0") REFERENCES "Ticket" ("primaryKey");

CREATE INDEX "TicketPosition_ITicket_m0" on "TicketPosition" ("Ticket_m0");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


