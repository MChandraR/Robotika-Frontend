"use client"
import React, { useEffect, useRef, useState} from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Pagination,
  Selection,
  SortDescriptor,
} from "@heroui/react";
import { HiDotsVertical } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useRouter } from "next/navigation";



interface Col {
    name : string,
    uid : string,
    sortable? : boolean,
    visible  :boolean
};

function getItemId<T>(item: T): string {
    if (typeof item === 'object' && item !== null) {
      if ('id' in item) {
        return item['id'] as string; 
      }
      if(Object.keys(item)[0]) return Object.keys(item)[0];
    }
    return ""; 
  }

function getItemValue<T>(item: T, key : keyof T): string {
    if (typeof item === 'object' && item !== null) {
      if (key in item) {
        return item[key] as string; 
      }
    }
    return ""; 
  }

export default function MyTable<T>(
    { data , columns, search_key , add_url, view_url, edit_url,  index_key, onDelete}: 
    { data: T[] , columns : Col[], search_key : keyof T, add_url? : string, view_url? : string, edit_url? :string, index_key : keyof T, onDelete? :(id : string)=>Promise<void>}
) {
    const router = useRouter();
    const [INITIAL_VISIBLE_COLUMNS, setCol] = useState<string[]>([]);
    type User = (typeof data)[0];

    const [filterValue, setFilterValue] = React.useState("");
    const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([]));
    const [visibleColumns, setVisibleColumns] = React.useState<Selection>(
        new Set(INITIAL_VISIBLE_COLUMNS),
    );
    const [rowsPerPage, setRowsPerPage] = React.useState(() => 5);  
    const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
        column: "age",
        direction: "ascending",
    });
    
    const prevColumnsRef = useRef<string[]>([]);

    useEffect(() => {
        const filteredColumns = columns.filter((item) => item.visible).map((item) => item.uid);
        setCol(filteredColumns);
    }, [columns]); 

    useEffect(() => {
        if (INITIAL_VISIBLE_COLUMNS.length > 0 && INITIAL_VISIBLE_COLUMNS !== prevColumnsRef.current) {
            setVisibleColumns(new Set(INITIAL_VISIBLE_COLUMNS));
            prevColumnsRef.current = INITIAL_VISIBLE_COLUMNS; 
        }
    }, [INITIAL_VISIBLE_COLUMNS]); 


  
  function capitalize(s: string) {
    return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";
  }
  

  const [page, setPage] = React.useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns, columns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...data];

     if (hasSearchFilter) {
    filteredUsers = filteredUsers.filter((user) => {
    
      return String(getItemValue(user, search_key)).toLowerCase().includes(filterValue.toLowerCase());
    });
  }

    return filteredUsers;
  }, [data, filterValue, hasSearchFilter, search_key]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: User, b: User) => {
      const first = a[sortDescriptor.column as keyof User] as number;
      const second = b[sortDescriptor.column as keyof User] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];
    console.log(columnKey);

    switch(columnKey){
        case "actions":
            return (
                <div className="relative flex justify-end items-center gap-2">
                <Dropdown>
                    <DropdownTrigger>
                    <Button isIconOnly size="sm" variant="light">
                        <HiDotsVertical />
                    </Button>
                    </DropdownTrigger>
                    <DropdownMenu className="text-black">
                    {
                        view_url ?
                        <DropdownItem key="view" onPress={()=>router.push(`${view_url}/${getItemValue(user, index_key)}`)}>
                        View
                        </DropdownItem>:<div></div>
                    }
                    {
                        edit_url ? 
                        <DropdownItem key="edit" onPress={()=>router.push(`${edit_url}/${getItemValue(user, index_key)}`)}>Edit</DropdownItem> : <div></div>
                    }   
                    {
                        onDelete?
                        <DropdownItem key="delete" onPress={async()=>onDelete(getItemValue(user, index_key))}>Delete</DropdownItem>:<div></div>
                    }
                    </DropdownMenu>
                </Dropdown>
                </div>
            );
        default:
            return (
                <div className="flex flex-col text-black">
                  <p className="text-bold text-small capitalize">{typeof cellValue === "string"?cellValue : ""}</p>
                </div>
              );
    }
    
    
  }, [index_key, router, view_url, onDelete, edit_url]);

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder={`Cari dengan ${String(search_key??"")}...`}
            startContent={<FaSearch />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
        
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<FaAngleDown />} variant="flat">
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            
            {
                add_url?
                  <Button color="primary" onPress={()=>router.push(`${add_url ??"#"}`)} endContent={<FaPlus />}>
                      Tambah
                  </Button>
                :<div></div>
            }
          
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total {data.length} data</span>
          <label className="flex items-center text-default-400 text-small">
            Baris per-halaman:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    router,
    add_url,
    columns,
    onClear,
    search_key,
    filterValue,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    data.length,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${filteredItems.length} selected`}
        </span>
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
            Previous
          </Button>
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
            Next
          </Button>
        </div>
      </div>
    );
  }, [selectedKeys, page, pages, filteredItems.length, onNextPage, onPreviousPage]);

  return (
    <Table
      isHeaderSticky
      aria-label="Example table with custom cells, pagination and sorting"
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{
        wrapper: "max-h-[382px]",
      }}
      selectedKeys={selectedKeys}
      selectionMode="multiple"
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No users found"} items={sortedItems}>
        {(item) => (
          <TableRow key={getItemId(item)}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
