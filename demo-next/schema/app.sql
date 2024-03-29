CREATE TABLE [dbo].[app](
	[row] [bigint] IDENTITY(1,1) NOT NULL,
	[id] [varchar](50) NOT NULL,
	[name] [nvarchar](50) NOT NULL,
	[birthday] [date] NOT NULL,
	[age] [int] NOT NULL,
	[deadline] [datetime] NOT NULL,
 CONSTRAINT [pk__app] PRIMARY KEY CLUSTERED 
(
	[row] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO