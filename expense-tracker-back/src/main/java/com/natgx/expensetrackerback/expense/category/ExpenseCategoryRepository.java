package com.natgx.expensetrackerback.expense.category;

import com.natgx.expensetrackerback.expense.Expense;
import com.natgx.expensetrackerback.expense.category.web.ExpenseCategoryController;
import org.springframework.data.repository.Repository;

import java.util.ArrayList;
import java.util.List;

interface ExpenseCategoryRepository extends Repository<ExpenseCategory, Long> {
    List<ExpenseCategory> findAll();
    void save(ExpenseCategory expense);
}

class InMemoryExpenseCategoryRepository implements ExpenseCategoryRepository {
    private final List<ExpenseCategory> store = new ArrayList<>();

    public void save(ExpenseCategory expense) {
        store.add(expense);
    }
    @Override
    public List<ExpenseCategory> findAll() {
        return new ArrayList<>(store);
    }

}